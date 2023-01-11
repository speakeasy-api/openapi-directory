package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesIdActionsChangeProtectionRequest {
    public PostVolumesIdActionsChangeProtectionPathParams pathParams;
    public PostVolumesIdActionsChangeProtectionRequest withPathParams(PostVolumesIdActionsChangeProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostVolumesIdActionsChangeProtectionRequestBody request;
    public PostVolumesIdActionsChangeProtectionRequest withRequest(PostVolumesIdActionsChangeProtectionRequestBody request) {
        this.request = request;
        return this;
    }
}