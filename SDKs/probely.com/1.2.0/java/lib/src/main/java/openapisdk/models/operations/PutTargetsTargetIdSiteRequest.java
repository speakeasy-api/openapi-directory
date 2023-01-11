package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdSiteRequest {
    public PutTargetsTargetIdSitePathParams pathParams;
    public PutTargetsTargetIdSiteRequest withPathParams(PutTargetsTargetIdSitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteInput request;
    public PutTargetsTargetIdSiteRequest withRequest(openapisdk.models.shared.SiteInput request) {
        this.request = request;
        return this;
    }
}