package openapisdk.models.operations;



public class PutQuoteRequest {
    public PutQuoteQueryParams queryParams;
    public PutQuoteRequest withQueryParams(PutQuoteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutQuoteSecurity security;
    public PutQuoteRequest withSecurity(PutQuoteSecurity security) {
        this.security = security;
        return this;
    }
}