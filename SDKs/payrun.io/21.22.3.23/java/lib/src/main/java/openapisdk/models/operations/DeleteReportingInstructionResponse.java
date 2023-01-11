package openapisdk.models.operations;



public class DeleteReportingInstructionResponse {
    public String contentType;
    public DeleteReportingInstructionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteReportingInstructionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteReportingInstructionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}