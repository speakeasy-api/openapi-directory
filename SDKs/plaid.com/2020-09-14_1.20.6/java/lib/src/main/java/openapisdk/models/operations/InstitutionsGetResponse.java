package openapisdk.models.operations;



public class InstitutionsGetResponse {
    public String contentType;
    public InstitutionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public InstitutionsGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> institutionsGetResponse;
    public InstitutionsGetResponse withInstitutionsGetResponse(java.util.Map<String, Object> institutionsGetResponse) {
        this.institutionsGetResponse = institutionsGetResponse;
        return this;
    }
    public Long statusCode;
    public InstitutionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}