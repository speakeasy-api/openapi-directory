package openapisdk.models.operations;



public class PutCoursesContentIdMetadataTopicResponse {
    public String contentType;
    public PutCoursesContentIdMetadataTopicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseMetaResponse courseMetaResponse;
    public PutCoursesContentIdMetadataTopicResponse withCourseMetaResponse(openapisdk.models.shared.CourseMetaResponse courseMetaResponse) {
        this.courseMetaResponse = courseMetaResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutCoursesContentIdMetadataTopicResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutCoursesContentIdMetadataTopicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}