package openapisdk.models.operations;



public class DeleteServersIdResponse {
    public String contentType;
    public DeleteServersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteServersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteServersId200ApplicationJson deleteServersId200ApplicationJSONObject;
    public DeleteServersIdResponse withDeleteServersId200ApplicationJsonObject(DeleteServersId200ApplicationJson deleteServersId200ApplicationJSONObject) {
        this.deleteServersId200ApplicationJSONObject = deleteServersId200ApplicationJSONObject;
        return this;
    }
}