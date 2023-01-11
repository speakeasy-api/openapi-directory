package openapisdk.models.operations;



public class CreateNodesResponse {
    public String contentType;
    public CreateNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateNodes200ApplicationJson createNodes200ApplicationJSONObject;
    public CreateNodesResponse withCreateNodes200ApplicationJsonObject(CreateNodes200ApplicationJson createNodes200ApplicationJSONObject) {
        this.createNodes200ApplicationJSONObject = createNodes200ApplicationJSONObject;
        return this;
    }
}