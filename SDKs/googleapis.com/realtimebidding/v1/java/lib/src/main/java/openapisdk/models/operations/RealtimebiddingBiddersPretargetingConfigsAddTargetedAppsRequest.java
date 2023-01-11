package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest {
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddTargetedAppsRequest request;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest withRequest(openapisdk.models.shared.AddTargetedAppsRequest request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity security) {
        this.security = security;
        return this;
    }
}