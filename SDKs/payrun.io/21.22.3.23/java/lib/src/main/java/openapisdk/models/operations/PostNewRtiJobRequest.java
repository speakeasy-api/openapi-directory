package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNewRtiJobRequest {
    public PostNewRtiJobHeaders headers;
    public PostNewRtiJobRequest withHeaders(PostNewRtiJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RtiJobInstruction request;
    public PostNewRtiJobRequest withRequest(openapisdk.models.shared.RtiJobInstruction request) {
        this.request = request;
        return this;
    }
}