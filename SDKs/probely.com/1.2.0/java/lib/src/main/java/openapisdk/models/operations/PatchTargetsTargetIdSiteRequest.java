package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdSiteRequest {
    public PatchTargetsTargetIdSitePathParams pathParams;
    public PatchTargetsTargetIdSiteRequest withPathParams(PatchTargetsTargetIdSitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteInput request;
    public PatchTargetsTargetIdSiteRequest withRequest(openapisdk.models.shared.SiteInput request) {
        this.request = request;
        return this;
    }
}