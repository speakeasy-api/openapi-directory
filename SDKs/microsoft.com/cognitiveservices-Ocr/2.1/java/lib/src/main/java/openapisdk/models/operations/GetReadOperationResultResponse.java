package openapisdk.models.operations;



public class GetReadOperationResultResponse {
    public openapisdk.models.shared.ComputerVisionError computerVisionError;
    public GetReadOperationResultResponse withComputerVisionError(openapisdk.models.shared.ComputerVisionError computerVisionError) {
        this.computerVisionError = computerVisionError;
        return this;
    }
    public String contentType;
    public GetReadOperationResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReadOperationResult readOperationResult;
    public GetReadOperationResultResponse withReadOperationResult(openapisdk.models.shared.ReadOperationResult readOperationResult) {
        this.readOperationResult = readOperationResult;
        return this;
    }
    public Long statusCode;
    public GetReadOperationResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}