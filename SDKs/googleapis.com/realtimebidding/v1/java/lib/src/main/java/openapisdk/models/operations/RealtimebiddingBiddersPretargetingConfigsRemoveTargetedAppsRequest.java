package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest {
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsPathParams pathParams;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest withPathParams(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsQueryParams queryParams;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest withQueryParams(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTargetedAppsRequest request;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest withRequest(openapisdk.models.shared.RemoveTargetedAppsRequest request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity security;
    public RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest withSecurity(RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity security) {
        this.security = security;
        return this;
    }
}