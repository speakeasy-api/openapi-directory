package openapisdk.models.operations;



public class FetchServiceUserResponse {
    public String contentType;
    public FetchServiceUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceUser conversationsV1ServiceServiceUser;
    public FetchServiceUserResponse withConversationsV1ServiceServiceUser(openapisdk.models.shared.ConversationsV1ServiceServiceUser conversationsV1ServiceServiceUser) {
        this.conversationsV1ServiceServiceUser = conversationsV1ServiceServiceUser;
        return this;
    }
}