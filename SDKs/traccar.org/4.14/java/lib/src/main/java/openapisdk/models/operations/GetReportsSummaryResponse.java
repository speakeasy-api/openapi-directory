package openapisdk.models.operations;



public class GetReportsSummaryResponse {
    public byte[] body;
    public GetReportsSummaryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetReportsSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportSummary[] reportSummaries;
    public GetReportsSummaryResponse withReportSummaries(openapisdk.models.shared.ReportSummary[] reportSummaries) {
        this.reportSummaries = reportSummaries;
        return this;
    }
    public Long statusCode;
    public GetReportsSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}