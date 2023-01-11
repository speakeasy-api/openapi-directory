package openapisdk.models.operations;



public class GetDeviceSwitchPortsStatusesResponse {
    public String contentType;
    public GetDeviceSwitchPortsStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceSwitchPortsStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getDeviceSwitchPortsStatuses200ApplicationJSONObject;
    public GetDeviceSwitchPortsStatusesResponse withGetDeviceSwitchPortsStatuses200ApplicationJsonObject(java.util.Map<String, Object> getDeviceSwitchPortsStatuses200ApplicationJSONObject) {
        this.getDeviceSwitchPortsStatuses200ApplicationJSONObject = getDeviceSwitchPortsStatuses200ApplicationJSONObject;
        return this;
    }
}