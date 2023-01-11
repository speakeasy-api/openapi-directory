package openapisdk.models.operations;



public class DeleteCisInstructionTagResponse {
    public String contentType;
    public DeleteCisInstructionTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteCisInstructionTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteCisInstructionTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}