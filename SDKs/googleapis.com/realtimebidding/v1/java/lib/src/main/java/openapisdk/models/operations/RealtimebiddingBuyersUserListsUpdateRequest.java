package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersUserListsUpdateRequest {
    public RealtimebiddingBuyersUserListsUpdatePathParams pathParams;
    public RealtimebiddingBuyersUserListsUpdateRequest withPathParams(RealtimebiddingBuyersUserListsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBuyersUserListsUpdateQueryParams queryParams;
    public RealtimebiddingBuyersUserListsUpdateRequest withQueryParams(RealtimebiddingBuyersUserListsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserListInput request;
    public RealtimebiddingBuyersUserListsUpdateRequest withRequest(openapisdk.models.shared.UserListInput request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBuyersUserListsUpdateSecurity security;
    public RealtimebiddingBuyersUserListsUpdateRequest withSecurity(RealtimebiddingBuyersUserListsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}