package openapisdk.models.operations;



public class PostPermissionsResponse {
    public String contentType;
    public PostPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Permission permission;
    public PostPermissionsResponse withPermission(openapisdk.models.shared.Permission permission) {
        this.permission = permission;
        return this;
    }
    public Long statusCode;
    public PostPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}