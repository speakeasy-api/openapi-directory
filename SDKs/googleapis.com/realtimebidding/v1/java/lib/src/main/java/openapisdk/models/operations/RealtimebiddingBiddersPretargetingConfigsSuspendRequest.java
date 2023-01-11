package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsSuspendRequest {
    public RealtimebiddingBiddersPretargetingConfigsSuspendPathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsSuspendRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsSuspendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsSuspendQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsSuspendRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsSuspendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RealtimebiddingBiddersPretargetingConfigsSuspendRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsSuspendSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsSuspendRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsSuspendSecurity security) {
        this.security = security;
        return this;
    }
}