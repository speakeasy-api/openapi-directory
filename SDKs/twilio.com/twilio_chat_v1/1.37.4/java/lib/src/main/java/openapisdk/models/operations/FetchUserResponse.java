package openapisdk.models.operations;



public class FetchUserResponse {
    public String contentType;
    public FetchUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV1ServiceUser chatV1ServiceUser;
    public FetchUserResponse withChatV1ServiceUser(openapisdk.models.shared.ChatV1ServiceUser chatV1ServiceUser) {
        this.chatV1ServiceUser = chatV1ServiceUser;
        return this;
    }
}