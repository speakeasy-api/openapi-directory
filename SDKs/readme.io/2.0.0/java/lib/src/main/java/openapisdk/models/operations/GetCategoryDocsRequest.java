package openapisdk.models.operations;



public class GetCategoryDocsRequest {
    public GetCategoryDocsPathParams pathParams;
    public GetCategoryDocsRequest withPathParams(GetCategoryDocsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCategoryDocsHeaders headers;
    public GetCategoryDocsRequest withHeaders(GetCategoryDocsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetCategoryDocsSecurity security;
    public GetCategoryDocsRequest withSecurity(GetCategoryDocsSecurity security) {
        this.security = security;
        return this;
    }
}