package openapisdk.models.operations;



public class GetTextOperationResultResponse {
    public openapisdk.models.shared.ComputerVisionError computerVisionError;
    public GetTextOperationResultResponse withComputerVisionError(openapisdk.models.shared.ComputerVisionError computerVisionError) {
        this.computerVisionError = computerVisionError;
        return this;
    }
    public String contentType;
    public GetTextOperationResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTextOperationResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TextOperationResult textOperationResult;
    public GetTextOperationResultResponse withTextOperationResult(openapisdk.models.shared.TextOperationResult textOperationResult) {
        this.textOperationResult = textOperationResult;
        return this;
    }
}