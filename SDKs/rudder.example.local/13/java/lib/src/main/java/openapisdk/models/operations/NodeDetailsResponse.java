package openapisdk.models.operations;



public class NodeDetailsResponse {
    public String contentType;
    public NodeDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodeDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public NodeDetails200ApplicationJson nodeDetails200ApplicationJSONObject;
    public NodeDetailsResponse withNodeDetails200ApplicationJsonObject(NodeDetails200ApplicationJson nodeDetails200ApplicationJSONObject) {
        this.nodeDetails200ApplicationJSONObject = nodeDetails200ApplicationJSONObject;
        return this;
    }
}