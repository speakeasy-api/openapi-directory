package openapisdk.models.operations;



public class GetPermissionResponse {
    public String contentType;
    public GetPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPermissionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Permission permission;
    public GetPermissionResponse withPermission(openapisdk.models.shared.Permission permission) {
        this.permission = permission;
        return this;
    }
    public Long statusCode;
    public GetPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}