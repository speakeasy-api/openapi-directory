package openapisdk.models.operations;



public class PutCoursesContentIdMetadataLevelResponse {
    public String contentType;
    public PutCoursesContentIdMetadataLevelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseMetaResponse courseMetaResponse;
    public PutCoursesContentIdMetadataLevelResponse withCourseMetaResponse(openapisdk.models.shared.CourseMetaResponse courseMetaResponse) {
        this.courseMetaResponse = courseMetaResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutCoursesContentIdMetadataLevelResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutCoursesContentIdMetadataLevelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}