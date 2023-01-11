package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNewDpsJobRequest {
    public PostNewDpsJobHeaders headers;
    public PostNewDpsJobRequest withHeaders(PostNewDpsJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DpsJobInstruction request;
    public PostNewDpsJobRequest withRequest(openapisdk.models.shared.DpsJobInstruction request) {
        this.request = request;
        return this;
    }
}