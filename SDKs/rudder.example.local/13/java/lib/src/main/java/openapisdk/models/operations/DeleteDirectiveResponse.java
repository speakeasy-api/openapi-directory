package openapisdk.models.operations;



public class DeleteDirectiveResponse {
    public String contentType;
    public DeleteDirectiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteDirectiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteDirective200ApplicationJson deleteDirective200ApplicationJSONObject;
    public DeleteDirectiveResponse withDeleteDirective200ApplicationJsonObject(DeleteDirective200ApplicationJson deleteDirective200ApplicationJSONObject) {
        this.deleteDirective200ApplicationJSONObject = deleteDirective200ApplicationJSONObject;
        return this;
    }
}