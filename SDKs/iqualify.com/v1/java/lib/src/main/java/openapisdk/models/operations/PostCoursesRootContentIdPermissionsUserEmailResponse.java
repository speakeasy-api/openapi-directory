package openapisdk.models.operations;



public class PostCoursesRootContentIdPermissionsUserEmailResponse {
    public String contentType;
    public PostCoursesRootContentIdPermissionsUserEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostCoursesRootContentIdPermissionsUserEmailResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostCoursesRootContentIdPermissionsUserEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson postCoursesRootContentIdPermissionsUserEmail201ApplicationJSONObject;
    public PostCoursesRootContentIdPermissionsUserEmailResponse withPostCoursesRootContentIdPermissionsUserEmail201ApplicationJsonObject(PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson postCoursesRootContentIdPermissionsUserEmail201ApplicationJSONObject) {
        this.postCoursesRootContentIdPermissionsUserEmail201ApplicationJSONObject = postCoursesRootContentIdPermissionsUserEmail201ApplicationJSONObject;
        return this;
    }
}