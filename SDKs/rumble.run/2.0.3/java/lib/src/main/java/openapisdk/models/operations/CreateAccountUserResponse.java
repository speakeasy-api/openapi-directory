package openapisdk.models.operations;



public class CreateAccountUserResponse {
    public String contentType;
    public CreateAccountUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAccountUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public CreateAccountUserResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}