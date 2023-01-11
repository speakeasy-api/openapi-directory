package openapisdk.models.operations;



public class CreateAccountUserInviteResponse {
    public String contentType;
    public CreateAccountUserInviteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAccountUserInviteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public CreateAccountUserInviteResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}