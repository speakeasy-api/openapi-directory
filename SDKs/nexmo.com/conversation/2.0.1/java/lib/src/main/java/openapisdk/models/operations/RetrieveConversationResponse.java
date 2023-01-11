package openapisdk.models.operations;



public class RetrieveConversationResponse {
    public String contentType;
    public RetrieveConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrieveConversation200ApplicationJson retrieveConversation200ApplicationJSONObject;
    public RetrieveConversationResponse withRetrieveConversation200ApplicationJsonObject(RetrieveConversation200ApplicationJson retrieveConversation200ApplicationJSONObject) {
        this.retrieveConversation200ApplicationJSONObject = retrieveConversation200ApplicationJSONObject;
        return this;
    }
}