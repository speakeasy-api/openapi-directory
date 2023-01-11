package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsAttachIsoRequest {
    public PostServersIdActionsAttachIsoPathParams pathParams;
    public PostServersIdActionsAttachIsoRequest withPathParams(PostServersIdActionsAttachIsoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsAttachIsoRequestBody request;
    public PostServersIdActionsAttachIsoRequest withRequest(PostServersIdActionsAttachIsoRequestBody request) {
        this.request = request;
        return this;
    }
}