package openapisdk.models.operations;



public class GetChangelogsRequest {
    public GetChangelogsQueryParams queryParams;
    public GetChangelogsRequest withQueryParams(GetChangelogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChangelogsSecurity security;
    public GetChangelogsRequest withSecurity(GetChangelogsSecurity security) {
        this.security = security;
        return this;
    }
}