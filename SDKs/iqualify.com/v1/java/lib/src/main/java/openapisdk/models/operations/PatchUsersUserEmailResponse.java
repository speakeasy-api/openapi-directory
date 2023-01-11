package openapisdk.models.operations;



public class PatchUsersUserEmailResponse {
    public String contentType;
    public PatchUsersUserEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchUsersUserEmailResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PatchUsersUserEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserResponse userResponse;
    public PatchUsersUserEmailResponse withUserResponse(openapisdk.models.shared.UserResponse userResponse) {
        this.userResponse = userResponse;
        return this;
    }
}