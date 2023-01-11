package openapisdk.models.operations;



public class UpdateDeviceResponse {
    public String contentType;
    public UpdateDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateDevice200ApplicationJSONObject;
    public UpdateDeviceResponse withUpdateDevice200ApplicationJsonObject(java.util.Map<String, Object> updateDevice200ApplicationJSONObject) {
        this.updateDevice200ApplicationJSONObject = updateDevice200ApplicationJSONObject;
        return this;
    }
}