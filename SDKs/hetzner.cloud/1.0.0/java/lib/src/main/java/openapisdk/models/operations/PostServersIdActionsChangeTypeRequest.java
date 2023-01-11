package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsChangeTypeRequest {
    public PostServersIdActionsChangeTypePathParams pathParams;
    public PostServersIdActionsChangeTypeRequest withPathParams(PostServersIdActionsChangeTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsChangeTypeRequestBody request;
    public PostServersIdActionsChangeTypeRequest withRequest(PostServersIdActionsChangeTypeRequestBody request) {
        this.request = request;
        return this;
    }
}