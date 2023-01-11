package openapisdk.models.operations;



public class DeleteQuoteRequest {
    public DeleteQuoteQueryParams queryParams;
    public DeleteQuoteRequest withQueryParams(DeleteQuoteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteQuoteSecurity security;
    public DeleteQuoteRequest withSecurity(DeleteQuoteSecurity security) {
        this.security = security;
        return this;
    }
}