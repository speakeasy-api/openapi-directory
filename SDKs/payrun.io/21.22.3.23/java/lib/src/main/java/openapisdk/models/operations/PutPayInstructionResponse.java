package openapisdk.models.operations;



public class PutPayInstructionResponse {
    public String contentType;
    public PutPayInstructionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutPayInstructionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayInstruction payInstruction;
    public PutPayInstructionResponse withPayInstruction(openapisdk.models.shared.PayInstruction payInstruction) {
        this.payInstruction = payInstruction;
        return this;
    }
    public Long statusCode;
    public PutPayInstructionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}