package openapisdk.models.operations;



public class PatchCisInstructionResponse {
    public openapisdk.models.shared.CisInstruction cisInstruction;
    public PatchCisInstructionResponse withCisInstruction(openapisdk.models.shared.CisInstruction cisInstruction) {
        this.cisInstruction = cisInstruction;
        return this;
    }
    public String contentType;
    public PatchCisInstructionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchCisInstructionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PatchCisInstructionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}