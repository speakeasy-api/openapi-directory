package openapisdk.models.operations;



public class GetuserConversationsResponse {
    public String contentType;
    public GetuserConversationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetuserConversationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetuserConversations200ApplicationJson[] getuserConversations200ApplicationJSONObjects;
    public GetuserConversationsResponse withGetuserConversations200ApplicationJsonObjects(GetuserConversations200ApplicationJson[] getuserConversations200ApplicationJSONObjects) {
        this.getuserConversations200ApplicationJSONObjects = getuserConversations200ApplicationJSONObjects;
        return this;
    }
}