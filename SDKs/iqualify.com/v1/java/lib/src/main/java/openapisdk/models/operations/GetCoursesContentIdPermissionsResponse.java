package openapisdk.models.operations;



public class GetCoursesContentIdPermissionsResponse {
    public String contentType;
    public GetCoursesContentIdPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCoursesContentIdPermissionsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCoursesContentIdPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userPermission;
    public GetCoursesContentIdPermissionsResponse withUserPermission(Object userPermission) {
        this.userPermission = userPermission;
        return this;
    }
}