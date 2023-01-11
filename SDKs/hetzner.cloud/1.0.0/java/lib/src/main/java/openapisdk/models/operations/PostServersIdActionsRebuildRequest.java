package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsRebuildRequest {
    public PostServersIdActionsRebuildPathParams pathParams;
    public PostServersIdActionsRebuildRequest withPathParams(PostServersIdActionsRebuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsRebuildRebuildServerRequest request;
    public PostServersIdActionsRebuildRequest withRequest(PostServersIdActionsRebuildRebuildServerRequest request) {
        this.request = request;
        return this;
    }
}