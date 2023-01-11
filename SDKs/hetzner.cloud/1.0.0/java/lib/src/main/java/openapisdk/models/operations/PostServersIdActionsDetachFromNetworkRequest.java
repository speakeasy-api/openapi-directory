package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsDetachFromNetworkRequest {
    public PostServersIdActionsDetachFromNetworkPathParams pathParams;
    public PostServersIdActionsDetachFromNetworkRequest withPathParams(PostServersIdActionsDetachFromNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest request;
    public PostServersIdActionsDetachFromNetworkRequest withRequest(PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest request) {
        this.request = request;
        return this;
    }
}