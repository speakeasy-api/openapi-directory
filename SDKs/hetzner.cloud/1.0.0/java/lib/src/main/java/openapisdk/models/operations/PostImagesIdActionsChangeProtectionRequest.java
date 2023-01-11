package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImagesIdActionsChangeProtectionRequest {
    public PostImagesIdActionsChangeProtectionPathParams pathParams;
    public PostImagesIdActionsChangeProtectionRequest withPathParams(PostImagesIdActionsChangeProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostImagesIdActionsChangeProtectionRequestBody request;
    public PostImagesIdActionsChangeProtectionRequest withRequest(PostImagesIdActionsChangeProtectionRequestBody request) {
        this.request = request;
        return this;
    }
}