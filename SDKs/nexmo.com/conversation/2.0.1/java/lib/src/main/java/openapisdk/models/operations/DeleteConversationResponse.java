package openapisdk.models.operations;



public class DeleteConversationResponse {
    public String contentType;
    public DeleteConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteConversation200ApplicationJSONObject;
    public DeleteConversationResponse withDeleteConversation200ApplicationJsonObject(java.util.Map<String, Object> deleteConversation200ApplicationJSONObject) {
        this.deleteConversation200ApplicationJSONObject = deleteConversation200ApplicationJSONObject;
        return this;
    }
}