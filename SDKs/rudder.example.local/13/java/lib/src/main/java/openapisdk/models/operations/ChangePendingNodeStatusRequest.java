package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangePendingNodeStatusRequest {
    public ChangePendingNodeStatusPathParams pathParams;
    public ChangePendingNodeStatusRequest withPathParams(ChangePendingNodeStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangePendingNodeStatusRequestBody request;
    public ChangePendingNodeStatusRequest withRequest(ChangePendingNodeStatusRequestBody request) {
        this.request = request;
        return this;
    }
}