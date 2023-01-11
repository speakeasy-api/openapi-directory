package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPayInstructionRequest {
    public PostPayInstructionPathParams pathParams;
    public PostPayInstructionRequest withPathParams(PostPayInstructionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostPayInstructionHeaders headers;
    public PostPayInstructionRequest withHeaders(PostPayInstructionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayInstruction request;
    public PostPayInstructionRequest withRequest(openapisdk.models.shared.PayInstruction request) {
        this.request = request;
        return this;
    }
}