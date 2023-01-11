package openapisdk.models.operations;



public class ListConversationsResponse {
    public String contentType;
    public ListConversationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListConversationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListConversations200ApplicationJson listConversations200ApplicationJSONObject;
    public ListConversationsResponse withListConversations200ApplicationJsonObject(ListConversations200ApplicationJson listConversations200ApplicationJSONObject) {
        this.listConversations200ApplicationJSONObject = listConversations200ApplicationJSONObject;
        return this;
    }
}