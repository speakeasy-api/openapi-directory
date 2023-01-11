package openapisdk.models.operations;



public class ReportsCreateResponse {
    public String contentType;
    public ReportsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportResponse reportResponse;
    public ReportsCreateResponse withReportResponse(openapisdk.models.shared.ReportResponse reportResponse) {
        this.reportResponse = reportResponse;
        return this;
    }
    public Long statusCode;
    public ReportsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}