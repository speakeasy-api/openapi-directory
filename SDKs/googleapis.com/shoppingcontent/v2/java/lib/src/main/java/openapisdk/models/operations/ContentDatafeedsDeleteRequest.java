package openapisdk.models.operations;



public class ContentDatafeedsDeleteRequest {
    public ContentDatafeedsDeletePathParams pathParams;
    public ContentDatafeedsDeleteRequest withPathParams(ContentDatafeedsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentDatafeedsDeleteQueryParams queryParams;
    public ContentDatafeedsDeleteRequest withQueryParams(ContentDatafeedsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentDatafeedsDeleteSecurity security;
    public ContentDatafeedsDeleteRequest withSecurity(ContentDatafeedsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}