package openapisdk.models.operations;



public class PutCoursesContentIdMetadataTagsResponse {
    public String contentType;
    public PutCoursesContentIdMetadataTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseMetaResponse courseMetaResponse;
    public PutCoursesContentIdMetadataTagsResponse withCourseMetaResponse(openapisdk.models.shared.CourseMetaResponse courseMetaResponse) {
        this.courseMetaResponse = courseMetaResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutCoursesContentIdMetadataTagsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutCoursesContentIdMetadataTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}