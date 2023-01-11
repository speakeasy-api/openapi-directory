package openapisdk.models.operations;



public class PutQuoteLikeRequest {
    public PutQuoteLikeQueryParams queryParams;
    public PutQuoteLikeRequest withQueryParams(PutQuoteLikeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutQuoteLikeSecurity security;
    public PutQuoteLikeRequest withSecurity(PutQuoteLikeSecurity security) {
        this.security = security;
        return this;
    }
}