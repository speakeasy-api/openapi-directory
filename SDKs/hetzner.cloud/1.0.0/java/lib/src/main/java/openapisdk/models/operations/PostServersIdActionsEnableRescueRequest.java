package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsEnableRescueRequest {
    public PostServersIdActionsEnableRescuePathParams pathParams;
    public PostServersIdActionsEnableRescueRequest withPathParams(PostServersIdActionsEnableRescuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsEnableRescueRequestBody request;
    public PostServersIdActionsEnableRescueRequest withRequest(PostServersIdActionsEnableRescueRequestBody request) {
        this.request = request;
        return this;
    }
}