package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsChangeProtectionRequest {
    public PostServersIdActionsChangeProtectionPathParams pathParams;
    public PostServersIdActionsChangeProtectionRequest withPathParams(PostServersIdActionsChangeProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsChangeProtectionRequestBody request;
    public PostServersIdActionsChangeProtectionRequest withRequest(PostServersIdActionsChangeProtectionRequestBody request) {
        this.request = request;
        return this;
    }
}