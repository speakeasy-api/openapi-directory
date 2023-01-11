package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersUserListsCloseRequest {
    public RealtimebiddingBuyersUserListsClosePathParams pathParams;
    public RealtimebiddingBuyersUserListsCloseRequest withPathParams(RealtimebiddingBuyersUserListsClosePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBuyersUserListsCloseQueryParams queryParams;
    public RealtimebiddingBuyersUserListsCloseRequest withQueryParams(RealtimebiddingBuyersUserListsCloseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RealtimebiddingBuyersUserListsCloseRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBuyersUserListsCloseSecurity security;
    public RealtimebiddingBuyersUserListsCloseRequest withSecurity(RealtimebiddingBuyersUserListsCloseSecurity security) {
        this.security = security;
        return this;
    }
}