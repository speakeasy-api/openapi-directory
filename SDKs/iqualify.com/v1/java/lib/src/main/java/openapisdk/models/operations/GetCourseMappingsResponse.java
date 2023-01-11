package openapisdk.models.operations;



public class GetCourseMappingsResponse {
    public String contentType;
    public GetCourseMappingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCourseMappingsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCourseMappingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, String> courseMappings;
    public GetCourseMappingsResponse withCourseMappings(java.util.Map<String, String> courseMappings) {
        this.courseMappings = courseMappings;
        return this;
    }
}