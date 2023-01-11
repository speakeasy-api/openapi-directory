package openapisdk.models.operations;



public class ReplaceConversationResponse {
    public String contentType;
    public ReplaceConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReplaceConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReplaceConversation200ApplicationJson replaceConversation200ApplicationJSONObject;
    public ReplaceConversationResponse withReplaceConversation200ApplicationJsonObject(ReplaceConversation200ApplicationJson replaceConversation200ApplicationJSONObject) {
        this.replaceConversation200ApplicationJSONObject = replaceConversation200ApplicationJSONObject;
        return this;
    }
}