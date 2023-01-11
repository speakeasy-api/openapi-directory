package openapisdk.models.operations;



public class EmployersSearchResponse {
    public String contentType;
    public EmployersSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> employersSearchResponse;
    public EmployersSearchResponse withEmployersSearchResponse(java.util.Map<String, Object> employersSearchResponse) {
        this.employersSearchResponse = employersSearchResponse;
        return this;
    }
    public Long statusCode;
    public EmployersSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}