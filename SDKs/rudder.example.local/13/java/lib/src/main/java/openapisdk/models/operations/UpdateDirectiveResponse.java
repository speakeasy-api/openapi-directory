package openapisdk.models.operations;



public class UpdateDirectiveResponse {
    public String contentType;
    public UpdateDirectiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDirectiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateDirective200ApplicationJson updateDirective200ApplicationJSONObject;
    public UpdateDirectiveResponse withUpdateDirective200ApplicationJsonObject(UpdateDirective200ApplicationJson updateDirective200ApplicationJSONObject) {
        this.updateDirective200ApplicationJSONObject = updateDirective200ApplicationJSONObject;
        return this;
    }
}