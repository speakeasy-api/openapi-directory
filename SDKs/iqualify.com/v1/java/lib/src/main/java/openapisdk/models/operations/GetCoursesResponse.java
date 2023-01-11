package openapisdk.models.operations;



public class GetCoursesResponse {
    public String contentType;
    public GetCoursesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseResponse[] courseResponses;
    public GetCoursesResponse withCourseResponses(openapisdk.models.shared.CourseResponse[] courseResponses) {
        this.courseResponses = courseResponses;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCoursesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCoursesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}