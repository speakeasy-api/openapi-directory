package openapisdk.models.operations;



public class GetNetworkApplianceSettingsResponse {
    public String contentType;
    public GetNetworkApplianceSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkApplianceSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkApplianceSettings200ApplicationJSONObject;
    public GetNetworkApplianceSettingsResponse withGetNetworkApplianceSettings200ApplicationJsonObject(java.util.Map<String, Object> getNetworkApplianceSettings200ApplicationJSONObject) {
        this.getNetworkApplianceSettings200ApplicationJSONObject = getNetworkApplianceSettings200ApplicationJSONObject;
        return this;
    }
}