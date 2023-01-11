package openapisdk.models.operations;



public class GetQuoteRequest {
    public GetQuoteQueryParams queryParams;
    public GetQuoteRequest withQueryParams(GetQuoteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteSecurity security;
    public GetQuoteRequest withSecurity(GetQuoteSecurity security) {
        this.security = security;
        return this;
    }
}