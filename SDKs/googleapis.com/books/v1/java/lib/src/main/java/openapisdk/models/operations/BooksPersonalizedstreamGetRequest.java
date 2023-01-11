package openapisdk.models.operations;



public class BooksPersonalizedstreamGetRequest {
    public BooksPersonalizedstreamGetQueryParams queryParams;
    public BooksPersonalizedstreamGetRequest withQueryParams(BooksPersonalizedstreamGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksPersonalizedstreamGetSecurity security;
    public BooksPersonalizedstreamGetRequest withSecurity(BooksPersonalizedstreamGetSecurity security) {
        this.security = security;
        return this;
    }
}