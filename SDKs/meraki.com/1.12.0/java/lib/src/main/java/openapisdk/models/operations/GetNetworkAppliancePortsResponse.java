package openapisdk.models.operations;



public class GetNetworkAppliancePortsResponse {
    public String contentType;
    public GetNetworkAppliancePortsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkAppliancePortsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkAppliancePorts200ApplicationJSONObject;
    public GetNetworkAppliancePortsResponse withGetNetworkAppliancePorts200ApplicationJsonObject(java.util.Map<String, Object> getNetworkAppliancePorts200ApplicationJSONObject) {
        this.getNetworkAppliancePorts200ApplicationJSONObject = getNetworkAppliancePorts200ApplicationJSONObject;
        return this;
    }
}