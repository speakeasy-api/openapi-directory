package openapisdk.models.operations;



public class CreateConversationResponse {
    public String contentType;
    public CreateConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateConversation200ApplicationJson createConversation200ApplicationJSONObject;
    public CreateConversationResponse withCreateConversation200ApplicationJsonObject(CreateConversation200ApplicationJson createConversation200ApplicationJSONObject) {
        this.createConversation200ApplicationJSONObject = createConversation200ApplicationJSONObject;
        return this;
    }
}