package openapisdk.models.operations;



public class GetQshowQuotesRequest {
    public GetQshowQuotesQueryParams queryParams;
    public GetQshowQuotesRequest withQueryParams(GetQshowQuotesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQshowQuotesSecurity security;
    public GetQshowQuotesRequest withSecurity(GetQshowQuotesSecurity security) {
        this.security = security;
        return this;
    }
}