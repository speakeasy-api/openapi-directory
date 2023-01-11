package openapisdk.models.operations;



public class UpdateUserResponse {
    public String contentType;
    public UpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceUser chatV2ServiceUser;
    public UpdateUserResponse withChatV2ServiceUser(openapisdk.models.shared.ChatV2ServiceUser chatV2ServiceUser) {
        this.chatV2ServiceUser = chatV2ServiceUser;
        return this;
    }
}