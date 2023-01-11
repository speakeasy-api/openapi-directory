package openapisdk.models.operations;



public class GetNodesStatusResponse {
    public String contentType;
    public GetNodesStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNodesStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetNodesStatus200ApplicationJson getNodesStatus200ApplicationJSONObject;
    public GetNodesStatusResponse withGetNodesStatus200ApplicationJsonObject(GetNodesStatus200ApplicationJson getNodesStatus200ApplicationJSONObject) {
        this.getNodesStatus200ApplicationJSONObject = getNodesStatus200ApplicationJSONObject;
        return this;
    }
}