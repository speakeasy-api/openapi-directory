package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCisInstructionIntoSubContractorRequest {
    public PostCisInstructionIntoSubContractorPathParams pathParams;
    public PostCisInstructionIntoSubContractorRequest withPathParams(PostCisInstructionIntoSubContractorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCisInstructionIntoSubContractorHeaders headers;
    public PostCisInstructionIntoSubContractorRequest withHeaders(PostCisInstructionIntoSubContractorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CisInstruction request;
    public PostCisInstructionIntoSubContractorRequest withRequest(openapisdk.models.shared.CisInstruction request) {
        this.request = request;
        return this;
    }
}