package openapisdk.models.operations;



public class DeleteQuoteImageRequest {
    public DeleteQuoteImageQueryParams queryParams;
    public DeleteQuoteImageRequest withQueryParams(DeleteQuoteImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteQuoteImageSecurity security;
    public DeleteQuoteImageRequest withSecurity(DeleteQuoteImageSecurity security) {
        this.security = security;
        return this;
    }
}