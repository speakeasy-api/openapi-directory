package openapisdk.models.operations;



public class HooksGetResponse {
    public String contentType;
    public HooksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public HooksGet200ApplicationJson hooksGet200ApplicationJSONObject;
    public HooksGetResponse withHooksGet200ApplicationJsonObject(HooksGet200ApplicationJson hooksGet200ApplicationJSONObject) {
        this.hooksGet200ApplicationJSONObject = hooksGet200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public HooksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}