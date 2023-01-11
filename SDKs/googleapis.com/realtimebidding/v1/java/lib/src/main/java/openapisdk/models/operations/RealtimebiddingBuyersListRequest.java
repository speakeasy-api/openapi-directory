package openapisdk.models.operations;



public class RealtimebiddingBuyersListRequest {
    public RealtimebiddingBuyersListQueryParams queryParams;
    public RealtimebiddingBuyersListRequest withQueryParams(RealtimebiddingBuyersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RealtimebiddingBuyersListSecurity security;
    public RealtimebiddingBuyersListRequest withSecurity(RealtimebiddingBuyersListSecurity security) {
        this.security = security;
        return this;
    }
}