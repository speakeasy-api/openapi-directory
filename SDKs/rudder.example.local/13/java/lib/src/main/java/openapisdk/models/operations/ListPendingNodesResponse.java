package openapisdk.models.operations;



public class ListPendingNodesResponse {
    public String contentType;
    public ListPendingNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPendingNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPendingNodes200ApplicationJson listPendingNodes200ApplicationJSONObject;
    public ListPendingNodesResponse withListPendingNodes200ApplicationJsonObject(ListPendingNodes200ApplicationJson listPendingNodes200ApplicationJSONObject) {
        this.listPendingNodes200ApplicationJSONObject = listPendingNodes200ApplicationJSONObject;
        return this;
    }
}