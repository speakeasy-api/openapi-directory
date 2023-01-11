package openapisdk.models.operations;



public class UpdateServiceUserResponse {
    public String contentType;
    public UpdateServiceUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceUser conversationsV1ServiceServiceUser;
    public UpdateServiceUserResponse withConversationsV1ServiceServiceUser(openapisdk.models.shared.ConversationsV1ServiceServiceUser conversationsV1ServiceServiceUser) {
        this.conversationsV1ServiceServiceUser = conversationsV1ServiceServiceUser;
        return this;
    }
}