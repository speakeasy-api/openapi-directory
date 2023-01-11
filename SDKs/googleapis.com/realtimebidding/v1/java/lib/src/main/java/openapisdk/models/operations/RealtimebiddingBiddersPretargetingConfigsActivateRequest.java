package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsActivateRequest {
    public RealtimebiddingBiddersPretargetingConfigsActivatePathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsActivateRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsActivateQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsActivateRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RealtimebiddingBiddersPretargetingConfigsActivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsActivateSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsActivateRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsActivateSecurity security) {
        this.security = security;
        return this;
    }
}