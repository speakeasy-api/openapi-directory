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
    public openapisdk.models.shared.ChatV1ServiceUser chatV1ServiceUser;
    public CreateUserResponse withChatV1ServiceUser(openapisdk.models.shared.ChatV1ServiceUser chatV1ServiceUser) {
        this.chatV1ServiceUser = chatV1ServiceUser;
        return this;
    }
}