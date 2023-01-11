package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFromBatchRequest {
    public RemoveFromBatchPathParams pathParams;
    public RemoveFromBatchRequest withPathParams(RemoveFromBatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveFromBatchRequestBody request;
    public RemoveFromBatchRequest withRequest(openapisdk.models.shared.RemoveFromBatchRequestBody request) {
        this.request = request;
        return this;
    }
}