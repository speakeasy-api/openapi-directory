package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCisInstructionIntoSubContractorRequest {
    public PutCisInstructionIntoSubContractorPathParams pathParams;
    public PutCisInstructionIntoSubContractorRequest withPathParams(PutCisInstructionIntoSubContractorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutCisInstructionIntoSubContractorHeaders headers;
    public PutCisInstructionIntoSubContractorRequest withHeaders(PutCisInstructionIntoSubContractorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CisInstruction request;
    public PutCisInstructionIntoSubContractorRequest withRequest(openapisdk.models.shared.CisInstruction request) {
        this.request = request;
        return this;
    }
}