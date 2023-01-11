package openapisdk.models.operations;



public class GetReportingInstructionFromEmployerResponse {
    public String contentType;
    public GetReportingInstructionFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetReportingInstructionFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.ReportingInstruction reportingInstruction;
    public GetReportingInstructionFromEmployerResponse withReportingInstruction(openapisdk.models.shared.ReportingInstruction reportingInstruction) {
        this.reportingInstruction = reportingInstruction;
        return this;
    }
    public Long statusCode;
    public GetReportingInstructionFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}