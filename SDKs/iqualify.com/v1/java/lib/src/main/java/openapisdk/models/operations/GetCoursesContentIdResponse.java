package openapisdk.models.operations;



public class GetCoursesContentIdResponse {
    public String contentType;
    public GetCoursesContentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseMetaResponse courseMetaResponse;
    public GetCoursesContentIdResponse withCourseMetaResponse(openapisdk.models.shared.CourseMetaResponse courseMetaResponse) {
        this.courseMetaResponse = courseMetaResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCoursesContentIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCoursesContentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}