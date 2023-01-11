package openapisdk.models.operations;



public class ReportsEntityUsageReportsGetResponse {
    public String contentType;
    public ReportsEntityUsageReportsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportsEntityUsageReportsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsageReports usageReports;
    public ReportsEntityUsageReportsGetResponse withUsageReports(openapisdk.models.shared.UsageReports usageReports) {
        this.usageReports = usageReports;
        return this;
    }
}