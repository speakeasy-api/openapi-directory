package openapisdk.models.operations;



public class GetDeviceWirelessStatusResponse {
    public String contentType;
    public GetDeviceWirelessStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceWirelessStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getDeviceWirelessStatus200ApplicationJSONObject;
    public GetDeviceWirelessStatusResponse withGetDeviceWirelessStatus200ApplicationJsonObject(java.util.Map<String, Object> getDeviceWirelessStatus200ApplicationJSONObject) {
        this.getDeviceWirelessStatus200ApplicationJSONObject = getDeviceWirelessStatus200ApplicationJSONObject;
        return this;
    }
}