package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpsIdActionsChangeProtectionRequest {
    public PostFloatingIpsIdActionsChangeProtectionPathParams pathParams;
    public PostFloatingIpsIdActionsChangeProtectionRequest withPathParams(PostFloatingIpsIdActionsChangeProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest request;
    public PostFloatingIpsIdActionsChangeProtectionRequest withRequest(PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest request) {
        this.request = request;
        return this;
    }
}