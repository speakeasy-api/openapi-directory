package openapisdk.models.operations;



public class PostQshowQuotesRemoveRequest {
    public PostQshowQuotesRemoveQueryParams queryParams;
    public PostQshowQuotesRemoveRequest withQueryParams(PostQshowQuotesRemoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostQshowQuotesRemoveSecurity security;
    public PostQshowQuotesRemoveRequest withSecurity(PostQshowQuotesRemoveSecurity security) {
        this.security = security;
        return this;
    }
}