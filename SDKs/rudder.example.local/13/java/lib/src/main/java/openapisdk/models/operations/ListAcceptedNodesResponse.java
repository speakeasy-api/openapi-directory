package openapisdk.models.operations;



public class ListAcceptedNodesResponse {
    public String contentType;
    public ListAcceptedNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListAcceptedNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAcceptedNodes200ApplicationJson listAcceptedNodes200ApplicationJSONObject;
    public ListAcceptedNodesResponse withListAcceptedNodes200ApplicationJsonObject(ListAcceptedNodes200ApplicationJson listAcceptedNodes200ApplicationJSONObject) {
        this.listAcceptedNodes200ApplicationJSONObject = listAcceptedNodes200ApplicationJSONObject;
        return this;
    }
}