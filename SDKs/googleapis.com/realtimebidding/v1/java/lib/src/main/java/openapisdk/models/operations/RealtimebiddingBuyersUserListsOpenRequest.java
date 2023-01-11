package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersUserListsOpenRequest {
    public RealtimebiddingBuyersUserListsOpenPathParams pathParams;
    public RealtimebiddingBuyersUserListsOpenRequest withPathParams(RealtimebiddingBuyersUserListsOpenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBuyersUserListsOpenQueryParams queryParams;
    public RealtimebiddingBuyersUserListsOpenRequest withQueryParams(RealtimebiddingBuyersUserListsOpenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RealtimebiddingBuyersUserListsOpenRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBuyersUserListsOpenSecurity security;
    public RealtimebiddingBuyersUserListsOpenRequest withSecurity(RealtimebiddingBuyersUserListsOpenSecurity security) {
        this.security = security;
        return this;
    }
}