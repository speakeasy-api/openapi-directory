package openapisdk.models.operations;



public class PutReportingInstructionResponse {
    public String contentType;
    public PutReportingInstructionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutReportingInstructionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.ReportingInstruction reportingInstruction;
    public PutReportingInstructionResponse withReportingInstruction(openapisdk.models.shared.ReportingInstruction reportingInstruction) {
        this.reportingInstruction = reportingInstruction;
        return this;
    }
    public Long statusCode;
    public PutReportingInstructionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}