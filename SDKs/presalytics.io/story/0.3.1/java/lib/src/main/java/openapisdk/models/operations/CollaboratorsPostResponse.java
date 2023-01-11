package openapisdk.models.operations;



public class CollaboratorsPostResponse {
    public String contentType;
    public CollaboratorsPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollaboratorsPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PermissionType[] permissionTypes;
    public CollaboratorsPostResponse withPermissionTypes(openapisdk.models.shared.PermissionType[] permissionTypes) {
        this.permissionTypes = permissionTypes;
        return this;
    }
    public Object problemDetail;
    public CollaboratorsPostResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
}