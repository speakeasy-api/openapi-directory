package openapisdk.models.operations;



public class StoryPermissionTypesGetResponse {
    public String contentType;
    public StoryPermissionTypesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryPermissionTypesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PermissionType[] permissionTypes;
    public StoryPermissionTypesGetResponse withPermissionTypes(openapisdk.models.shared.PermissionType[] permissionTypes) {
        this.permissionTypes = permissionTypes;
        return this;
    }
    public Object problemDetail;
    public StoryPermissionTypesGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
}