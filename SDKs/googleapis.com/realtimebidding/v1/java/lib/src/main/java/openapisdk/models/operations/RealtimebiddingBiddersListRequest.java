package openapisdk.models.operations;



public class RealtimebiddingBiddersListRequest {
    public RealtimebiddingBiddersListQueryParams queryParams;
    public RealtimebiddingBiddersListRequest withQueryParams(RealtimebiddingBiddersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RealtimebiddingBiddersListSecurity security;
    public RealtimebiddingBiddersListRequest withSecurity(RealtimebiddingBiddersListSecurity security) {
        this.security = security;
        return this;
    }
}