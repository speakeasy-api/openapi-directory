package openapisdk.models.operations;



public class GetFeedAlt1Request {
    public GetFeedAlt1QueryParams queryParams;
    public GetFeedAlt1Request withQueryParams(GetFeedAlt1QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeedAlt1Security security;
    public GetFeedAlt1Request withSecurity(GetFeedAlt1Security security) {
        this.security = security;
        return this;
    }
}