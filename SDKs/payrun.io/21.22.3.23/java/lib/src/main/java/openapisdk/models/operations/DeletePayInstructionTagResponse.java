package openapisdk.models.operations;



public class DeletePayInstructionTagResponse {
    public String contentType;
    public DeletePayInstructionTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeletePayInstructionTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeletePayInstructionTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}