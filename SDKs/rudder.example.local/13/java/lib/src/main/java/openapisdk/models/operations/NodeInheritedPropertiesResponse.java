package openapisdk.models.operations;



public class NodeInheritedPropertiesResponse {
    public String contentType;
    public NodeInheritedPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodeInheritedPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public NodeInheritedProperties200ApplicationJson nodeInheritedProperties200ApplicationJSONObject;
    public NodeInheritedPropertiesResponse withNodeInheritedProperties200ApplicationJsonObject(NodeInheritedProperties200ApplicationJson nodeInheritedProperties200ApplicationJSONObject) {
        this.nodeInheritedProperties200ApplicationJSONObject = nodeInheritedProperties200ApplicationJSONObject;
        return this;
    }
}