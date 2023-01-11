package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsCreateImageRequest {
    public PostServersIdActionsCreateImagePathParams pathParams;
    public PostServersIdActionsCreateImageRequest withPathParams(PostServersIdActionsCreateImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsCreateImageCreateImageRequest request;
    public PostServersIdActionsCreateImageRequest withRequest(PostServersIdActionsCreateImageCreateImageRequest request) {
        this.request = request;
        return this;
    }
}