package openapisdk.models.operations;



public class DeleteNodeResponse {
    public String contentType;
    public DeleteNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteNode200ApplicationJson deleteNode200ApplicationJSONObject;
    public DeleteNodeResponse withDeleteNode200ApplicationJsonObject(DeleteNode200ApplicationJson deleteNode200ApplicationJSONObject) {
        this.deleteNode200ApplicationJSONObject = deleteNode200ApplicationJSONObject;
        return this;
    }
}