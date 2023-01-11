package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNewPayRunJobRequest {
    public PostNewPayRunJobHeaders headers;
    public PostNewPayRunJobRequest withHeaders(PostNewPayRunJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayRunJobInstruction request;
    public PostNewPayRunJobRequest withRequest(openapisdk.models.shared.PayRunJobInstruction request) {
        this.request = request;
        return this;
    }
}