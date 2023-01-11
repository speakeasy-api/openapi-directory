package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersUserListsCreateRequest {
    public RealtimebiddingBuyersUserListsCreatePathParams pathParams;
    public RealtimebiddingBuyersUserListsCreateRequest withPathParams(RealtimebiddingBuyersUserListsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBuyersUserListsCreateQueryParams queryParams;
    public RealtimebiddingBuyersUserListsCreateRequest withQueryParams(RealtimebiddingBuyersUserListsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserListInput request;
    public RealtimebiddingBuyersUserListsCreateRequest withRequest(openapisdk.models.shared.UserListInput request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBuyersUserListsCreateSecurity security;
    public RealtimebiddingBuyersUserListsCreateRequest withSecurity(RealtimebiddingBuyersUserListsCreateSecurity security) {
        this.security = security;
        return this;
    }
}