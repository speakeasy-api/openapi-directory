package openapisdk.models.operations;



public class GetDeviceCameraSenseResponse {
    public String contentType;
    public GetDeviceCameraSenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceCameraSenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getDeviceCameraSense200ApplicationJSONObject;
    public GetDeviceCameraSenseResponse withGetDeviceCameraSense200ApplicationJsonObject(java.util.Map<String, Object> getDeviceCameraSense200ApplicationJSONObject) {
        this.getDeviceCameraSense200ApplicationJSONObject = getDeviceCameraSense200ApplicationJSONObject;
        return this;
    }
}