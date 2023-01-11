package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest {
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddTargetedSitesRequest request;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest withRequest(openapisdk.models.shared.AddTargetedSitesRequest request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity security) {
        this.security = security;
        return this;
    }
}