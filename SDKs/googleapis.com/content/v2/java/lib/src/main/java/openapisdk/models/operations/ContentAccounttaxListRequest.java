package openapisdk.models.operations;



public class ContentAccounttaxListRequest {
    public ContentAccounttaxListPathParams pathParams;
    public ContentAccounttaxListRequest withPathParams(ContentAccounttaxListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccounttaxListQueryParams queryParams;
    public ContentAccounttaxListRequest withQueryParams(ContentAccounttaxListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentAccounttaxListSecurity security;
    public ContentAccounttaxListRequest withSecurity(ContentAccounttaxListSecurity security) {
        this.security = security;
        return this;
    }
}