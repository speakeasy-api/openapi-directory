package openapisdk.models.operations;



public class ReportsListResponse {
    public String contentType;
    public ReportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public ReportsListResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public ReportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}