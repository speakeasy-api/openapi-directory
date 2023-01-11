package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBatchRequestBody request;
    public CreateBatchRequest withRequest(openapisdk.models.shared.CreateBatchRequestBody request) {
        this.request = request;
        return this;
    }
}