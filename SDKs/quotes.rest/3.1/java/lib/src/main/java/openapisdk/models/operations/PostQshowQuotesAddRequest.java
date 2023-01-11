package openapisdk.models.operations;



public class PostQshowQuotesAddRequest {
    public PostQshowQuotesAddQueryParams queryParams;
    public PostQshowQuotesAddRequest withQueryParams(PostQshowQuotesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostQshowQuotesAddSecurity security;
    public PostQshowQuotesAddRequest withSecurity(PostQshowQuotesAddSecurity security) {
        this.security = security;
        return this;
    }
}