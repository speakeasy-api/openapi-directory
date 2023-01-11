package openapisdk.models.operations;



public class GetCompanySpecificOpenApiDocumentationResponse {
    public String contentType;
    public GetCompanySpecificOpenApiDocumentationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCompanySpecificOpenApiDocumentationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetCompanySpecificOpenApiDocumentationResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}