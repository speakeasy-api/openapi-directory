package openapisdk.models.operations;



public class CreateDirectiveResponse {
    public String contentType;
    public CreateDirectiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDirectiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateDirective200ApplicationJson createDirective200ApplicationJSONObject;
    public CreateDirectiveResponse withCreateDirective200ApplicationJsonObject(CreateDirective200ApplicationJson createDirective200ApplicationJSONObject) {
        this.createDirective200ApplicationJSONObject = createDirective200ApplicationJSONObject;
        return this;
    }
}