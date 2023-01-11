package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPayInstructionRequest {
    public PatchPayInstructionPathParams pathParams;
    public PatchPayInstructionRequest withPathParams(PatchPayInstructionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchPayInstructionHeaders headers;
    public PatchPayInstructionRequest withHeaders(PatchPayInstructionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayInstruction request;
    public PatchPayInstructionRequest withRequest(openapisdk.models.shared.PayInstruction request) {
        this.request = request;
        return this;
    }
}