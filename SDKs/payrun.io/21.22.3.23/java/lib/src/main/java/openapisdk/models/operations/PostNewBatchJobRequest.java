package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNewBatchJobRequest {
    public PostNewBatchJobHeaders headers;
    public PostNewBatchJobRequest withHeaders(PostNewBatchJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchJobInstruction request;
    public PostNewBatchJobRequest withRequest(openapisdk.models.shared.BatchJobInstruction request) {
        this.request = request;
        return this;
    }
}