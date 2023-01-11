package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest {
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersPathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTargetedPublishersRequest request;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest withRequest(openapisdk.models.shared.RemoveTargetedPublishersRequest request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity security) {
        this.security = security;
        return this;
    }
}