package openapisdk.models.operations;



public class CreateServiceUserResponse {
    public String contentType;
    public CreateServiceUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceUser conversationsV1ServiceServiceUser;
    public CreateServiceUserResponse withConversationsV1ServiceServiceUser(openapisdk.models.shared.ConversationsV1ServiceServiceUser conversationsV1ServiceServiceUser) {
        this.conversationsV1ServiceServiceUser = conversationsV1ServiceServiceUser;
        return this;
    }
}