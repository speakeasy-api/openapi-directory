package openapisdk.models.operations;



public class GetNetworkDevicesResponse {
    public String contentType;
    public GetNetworkDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkDevices200ApplicationJSONObject;
    public GetNetworkDevicesResponse withGetNetworkDevices200ApplicationJsonObject(java.util.Map<String, Object> getNetworkDevices200ApplicationJSONObject) {
        this.getNetworkDevices200ApplicationJSONObject = getNetworkDevices200ApplicationJSONObject;
        return this;
    }
}