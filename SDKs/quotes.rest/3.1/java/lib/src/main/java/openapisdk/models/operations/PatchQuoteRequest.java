package openapisdk.models.operations;



public class PatchQuoteRequest {
    public PatchQuoteQueryParams queryParams;
    public PatchQuoteRequest withQueryParams(PatchQuoteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatchQuoteSecurity security;
    public PatchQuoteRequest withSecurity(PatchQuoteSecurity security) {
        this.security = security;
        return this;
    }
}