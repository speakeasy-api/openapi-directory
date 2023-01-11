package openapisdk.models.operations;



public class ContentDatafeedsGetRequest {
    public ContentDatafeedsGetPathParams pathParams;
    public ContentDatafeedsGetRequest withPathParams(ContentDatafeedsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentDatafeedsGetQueryParams queryParams;
    public ContentDatafeedsGetRequest withQueryParams(ContentDatafeedsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentDatafeedsGetSecurity security;
    public ContentDatafeedsGetRequest withSecurity(ContentDatafeedsGetSecurity security) {
        this.security = security;
        return this;
    }
}