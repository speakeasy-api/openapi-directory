package openapisdk.models.operations;



public class GetPayInstructionFromEmployeeResponse {
    public String contentType;
    public GetPayInstructionFromEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayInstructionFromEmployeeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayInstruction payInstruction;
    public GetPayInstructionFromEmployeeResponse withPayInstruction(openapisdk.models.shared.PayInstruction payInstruction) {
        this.payInstruction = payInstruction;
        return this;
    }
    public Long statusCode;
    public GetPayInstructionFromEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}