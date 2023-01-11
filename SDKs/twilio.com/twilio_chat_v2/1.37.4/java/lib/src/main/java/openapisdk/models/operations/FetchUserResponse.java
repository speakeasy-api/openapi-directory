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
    public openapisdk.models.shared.ChatV2ServiceUser chatV2ServiceUser;
    public FetchUserResponse withChatV2ServiceUser(openapisdk.models.shared.ChatV2ServiceUser chatV2ServiceUser) {
        this.chatV2ServiceUser = chatV2ServiceUser;
        return this;
    }
}