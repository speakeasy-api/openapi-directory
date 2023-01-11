package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsChangeDnsPtrRequest {
    public PostServersIdActionsChangeDnsPtrPathParams pathParams;
    public PostServersIdActionsChangeDnsPtrRequest withPathParams(PostServersIdActionsChangeDnsPtrPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsChangeDnsPtrRequestBody request;
    public PostServersIdActionsChangeDnsPtrRequest withRequest(PostServersIdActionsChangeDnsPtrRequestBody request) {
        this.request = request;
        return this;
    }
}