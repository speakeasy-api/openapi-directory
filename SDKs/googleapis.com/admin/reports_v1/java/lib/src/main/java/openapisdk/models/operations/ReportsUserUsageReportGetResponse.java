package openapisdk.models.operations;



public class ReportsUserUsageReportGetResponse {
    public String contentType;
    public ReportsUserUsageReportGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportsUserUsageReportGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsageReports usageReports;
    public ReportsUserUsageReportGetResponse withUsageReports(openapisdk.models.shared.UsageReports usageReports) {
        this.usageReports = usageReports;
        return this;
    }
}