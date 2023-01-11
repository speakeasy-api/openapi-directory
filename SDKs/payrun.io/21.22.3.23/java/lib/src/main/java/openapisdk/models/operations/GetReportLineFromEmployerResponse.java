package openapisdk.models.operations;



public class GetReportLineFromEmployerResponse {
    public String contentType;
    public GetReportLineFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetReportLineFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.ReportLine reportLine;
    public GetReportLineFromEmployerResponse withReportLine(openapisdk.models.shared.ReportLine reportLine) {
        this.reportLine = reportLine;
        return this;
    }
    public Long statusCode;
    public GetReportLineFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}