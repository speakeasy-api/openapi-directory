package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsAttachToNetworkRequest {
    public PostServersIdActionsAttachToNetworkPathParams pathParams;
    public PostServersIdActionsAttachToNetworkRequest withPathParams(PostServersIdActionsAttachToNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsAttachToNetworkAttachToNetworkRequest request;
    public PostServersIdActionsAttachToNetworkRequest withRequest(PostServersIdActionsAttachToNetworkAttachToNetworkRequest request) {
        this.request = request;
        return this;
    }
}