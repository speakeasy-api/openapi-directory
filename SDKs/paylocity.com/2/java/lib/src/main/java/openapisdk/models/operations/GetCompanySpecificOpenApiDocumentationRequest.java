package openapisdk.models.operations;



public class GetCompanySpecificOpenApiDocumentationRequest {
    public GetCompanySpecificOpenApiDocumentationPathParams pathParams;
    public GetCompanySpecificOpenApiDocumentationRequest withPathParams(GetCompanySpecificOpenApiDocumentationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCompanySpecificOpenApiDocumentationHeaders headers;
    public GetCompanySpecificOpenApiDocumentationRequest withHeaders(GetCompanySpecificOpenApiDocumentationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetCompanySpecificOpenApiDocumentationSecurity security;
    public GetCompanySpecificOpenApiDocumentationRequest withSecurity(GetCompanySpecificOpenApiDocumentationSecurity security) {
        this.security = security;
        return this;
    }
}