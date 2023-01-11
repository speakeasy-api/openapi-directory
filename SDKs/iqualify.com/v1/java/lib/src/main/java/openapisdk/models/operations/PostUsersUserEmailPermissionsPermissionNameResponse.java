package openapisdk.models.operations;



public class PostUsersUserEmailPermissionsPermissionNameResponse {
    public String contentType;
    public PostUsersUserEmailPermissionsPermissionNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostUsersUserEmailPermissionsPermissionNameResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostUsersUserEmailPermissionsPermissionNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserResponse userResponse;
    public PostUsersUserEmailPermissionsPermissionNameResponse withUserResponse(openapisdk.models.shared.UserResponse userResponse) {
        this.userResponse = userResponse;
        return this;
    }
}