package openapisdk.models.operations;



public class DeleteQuoteLikeRequest {
    public DeleteQuoteLikeQueryParams queryParams;
    public DeleteQuoteLikeRequest withQueryParams(DeleteQuoteLikeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteQuoteLikeSecurity security;
    public DeleteQuoteLikeRequest withSecurity(DeleteQuoteLikeSecurity security) {
        this.security = security;
        return this;
    }
}