package openapisdk.models.operations;



public class PostUsersUserEmailInviteEmailResponse {
    public String contentType;
    public PostUsersUserEmailInviteEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostUsersUserEmailInviteEmailResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostUsersUserEmailInviteEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}