package openapisdk.models.operations;



public class PutCisInstructionIntoSubContractorResponse {
    public openapisdk.models.shared.CisInstruction cisInstruction;
    public PutCisInstructionIntoSubContractorResponse withCisInstruction(openapisdk.models.shared.CisInstruction cisInstruction) {
        this.cisInstruction = cisInstruction;
        return this;
    }
    public String contentType;
    public PutCisInstructionIntoSubContractorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutCisInstructionIntoSubContractorResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutCisInstructionIntoSubContractorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}