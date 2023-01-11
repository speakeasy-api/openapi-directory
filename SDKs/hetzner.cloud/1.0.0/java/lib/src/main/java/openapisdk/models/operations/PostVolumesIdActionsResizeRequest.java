package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesIdActionsResizeRequest {
    public PostVolumesIdActionsResizePathParams pathParams;
    public PostVolumesIdActionsResizeRequest withPathParams(PostVolumesIdActionsResizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostVolumesIdActionsResizeRequestBody request;
    public PostVolumesIdActionsResizeRequest withRequest(PostVolumesIdActionsResizeRequestBody request) {
        this.request = request;
        return this;
    }
}