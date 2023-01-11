package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessBatchRequest {
    public ProcessBatchPathParams pathParams;
    public ProcessBatchRequest withPathParams(ProcessBatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProcessBatchRequestBody request;
    public ProcessBatchRequest withRequest(openapisdk.models.shared.ProcessBatchRequestBody request) {
        this.request = request;
        return this;
    }
}