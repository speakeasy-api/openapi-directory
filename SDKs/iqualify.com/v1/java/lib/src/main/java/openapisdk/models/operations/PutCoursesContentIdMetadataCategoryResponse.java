package openapisdk.models.operations;



public class PutCoursesContentIdMetadataCategoryResponse {
    public String contentType;
    public PutCoursesContentIdMetadataCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseMetaResponse courseMetaResponse;
    public PutCoursesContentIdMetadataCategoryResponse withCourseMetaResponse(openapisdk.models.shared.CourseMetaResponse courseMetaResponse) {
        this.courseMetaResponse = courseMetaResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutCoursesContentIdMetadataCategoryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutCoursesContentIdMetadataCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}