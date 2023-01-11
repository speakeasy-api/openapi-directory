package openapisdk.models.operations;



public class PatchPayInstructionResponse {
    public String contentType;
    public PatchPayInstructionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchPayInstructionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayInstruction payInstruction;
    public PatchPayInstructionResponse withPayInstruction(openapisdk.models.shared.PayInstruction payInstruction) {
        this.payInstruction = payInstruction;
        return this;
    }
    public Long statusCode;
    public PatchPayInstructionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}