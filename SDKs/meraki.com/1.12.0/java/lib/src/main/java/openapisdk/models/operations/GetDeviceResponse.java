package openapisdk.models.operations;



public class GetDeviceResponse {
    public String contentType;
    public GetDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getDevice200ApplicationJSONObject;
    public GetDeviceResponse withGetDevice200ApplicationJsonObject(java.util.Map<String, Object> getDevice200ApplicationJSONObject) {
        this.getDevice200ApplicationJSONObject = getDevice200ApplicationJSONObject;
        return this;
    }
}