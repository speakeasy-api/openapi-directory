package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest {
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTargetedSitesRequest request;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest withRequest(openapisdk.models.shared.RemoveTargetedSitesRequest request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity security) {
        this.security = security;
        return this;
    }
}