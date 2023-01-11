package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest {
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddTargetedPublishersRequest request;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest withRequest(openapisdk.models.shared.AddTargetedPublishersRequest request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity security) {
        this.security = security;
        return this;
    }
}