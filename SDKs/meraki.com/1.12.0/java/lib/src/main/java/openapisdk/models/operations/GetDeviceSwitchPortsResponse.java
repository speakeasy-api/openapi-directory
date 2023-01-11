package openapisdk.models.operations;



public class GetDeviceSwitchPortsResponse {
    public String contentType;
    public GetDeviceSwitchPortsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceSwitchPortsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getDeviceSwitchPorts200ApplicationJSONObject;
    public GetDeviceSwitchPortsResponse withGetDeviceSwitchPorts200ApplicationJsonObject(java.util.Map<String, Object> getDeviceSwitchPorts200ApplicationJSONObject) {
        this.getDeviceSwitchPorts200ApplicationJSONObject = getDeviceSwitchPorts200ApplicationJSONObject;
        return this;
    }
}