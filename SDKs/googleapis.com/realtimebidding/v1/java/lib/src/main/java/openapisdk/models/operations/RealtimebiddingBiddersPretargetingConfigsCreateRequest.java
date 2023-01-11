package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsCreateRequest {
    public RealtimebiddingBiddersPretargetingConfigsCreatePathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsCreateRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsCreateQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsCreateRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PretargetingConfigInput request;
    public RealtimebiddingBiddersPretargetingConfigsCreateRequest withRequest(openapisdk.models.shared.PretargetingConfigInput request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsCreateSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsCreateRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}