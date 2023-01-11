package openapisdk.models.operations;



public class CreateUserResponse {
    public String contentType;
    public CreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceUser chatV2ServiceUser;
    public CreateUserResponse withChatV2ServiceUser(openapisdk.models.shared.ChatV2ServiceUser chatV2ServiceUser) {
        this.chatV2ServiceUser = chatV2ServiceUser;
        return this;
    }
}