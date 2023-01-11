package openapisdk.models.operations;



public class ContentDatafeedsListRequest {
    public ContentDatafeedsListPathParams pathParams;
    public ContentDatafeedsListRequest withPathParams(ContentDatafeedsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentDatafeedsListQueryParams queryParams;
    public ContentDatafeedsListRequest withQueryParams(ContentDatafeedsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentDatafeedsListSecurity security;
    public ContentDatafeedsListRequest withSecurity(ContentDatafeedsListSecurity security) {
        this.security = security;
        return this;
    }
}