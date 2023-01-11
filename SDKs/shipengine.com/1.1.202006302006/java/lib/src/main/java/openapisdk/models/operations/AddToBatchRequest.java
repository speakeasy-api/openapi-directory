package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddToBatchRequest {
    public AddToBatchPathParams pathParams;
    public AddToBatchRequest withPathParams(AddToBatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddToBatchRequestBody request;
    public AddToBatchRequest withRequest(openapisdk.models.shared.AddToBatchRequestBody request) {
        this.request = request;
        return this;
    }
}