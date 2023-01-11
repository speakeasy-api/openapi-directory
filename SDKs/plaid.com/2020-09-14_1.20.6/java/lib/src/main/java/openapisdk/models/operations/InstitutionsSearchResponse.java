package openapisdk.models.operations;



public class InstitutionsSearchResponse {
    public String contentType;
    public InstitutionsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public InstitutionsSearchResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> institutionsSearchResponse;
    public InstitutionsSearchResponse withInstitutionsSearchResponse(java.util.Map<String, Object> institutionsSearchResponse) {
        this.institutionsSearchResponse = institutionsSearchResponse;
        return this;
    }
    public Long statusCode;
    public InstitutionsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}