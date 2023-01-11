package openapisdk.models.operations;



public class ContentOrderreturnsListRequest {
    public ContentOrderreturnsListPathParams pathParams;
    public ContentOrderreturnsListRequest withPathParams(ContentOrderreturnsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrderreturnsListQueryParams queryParams;
    public ContentOrderreturnsListRequest withQueryParams(ContentOrderreturnsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentOrderreturnsListSecurity security;
    public ContentOrderreturnsListRequest withSecurity(ContentOrderreturnsListSecurity security) {
        this.security = security;
        return this;
    }
}