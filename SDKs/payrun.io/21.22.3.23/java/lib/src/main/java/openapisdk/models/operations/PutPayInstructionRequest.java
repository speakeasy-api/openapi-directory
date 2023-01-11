package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPayInstructionRequest {
    public PutPayInstructionPathParams pathParams;
    public PutPayInstructionRequest withPathParams(PutPayInstructionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPayInstructionHeaders headers;
    public PutPayInstructionRequest withHeaders(PutPayInstructionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayInstruction request;
    public PutPayInstructionRequest withRequest(openapisdk.models.shared.PayInstruction request) {
        this.request = request;
        return this;
    }
}