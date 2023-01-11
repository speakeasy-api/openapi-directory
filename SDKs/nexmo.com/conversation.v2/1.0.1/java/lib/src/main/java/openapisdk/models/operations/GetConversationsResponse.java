package openapisdk.models.operations;



public class GetConversationsResponse {
    public String contentType;
    public GetConversationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConversationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getConversations200ApplicationJSONAny;
    public GetConversationsResponse withGetConversations200ApplicationJsonAny(Object getConversations200ApplicationJSONAny) {
        this.getConversations200ApplicationJSONAny = getConversations200ApplicationJSONAny;
        return this;
    }
}