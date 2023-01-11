package openapisdk.models.operations;



public class GetCisInstructionFromSubContractorResponse {
    public openapisdk.models.shared.CisInstruction cisInstruction;
    public GetCisInstructionFromSubContractorResponse withCisInstruction(openapisdk.models.shared.CisInstruction cisInstruction) {
        this.cisInstruction = cisInstruction;
        return this;
    }
    public String contentType;
    public GetCisInstructionFromSubContractorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCisInstructionFromSubContractorResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetCisInstructionFromSubContractorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}