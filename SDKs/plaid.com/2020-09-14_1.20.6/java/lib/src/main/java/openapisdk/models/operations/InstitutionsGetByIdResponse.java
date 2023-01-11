package openapisdk.models.operations;



public class InstitutionsGetByIdResponse {
    public String contentType;
    public InstitutionsGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public InstitutionsGetByIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> institutionsGetByIdResponse;
    public InstitutionsGetByIdResponse withInstitutionsGetByIdResponse(java.util.Map<String, Object> institutionsGetByIdResponse) {
        this.institutionsGetByIdResponse = institutionsGetByIdResponse;
        return this;
    }
    public Long statusCode;
    public InstitutionsGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}