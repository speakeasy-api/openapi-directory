package openapisdk.models.operations;



public class ReportsCustomerUsageReportsGetResponse {
    public String contentType;
    public ReportsCustomerUsageReportsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportsCustomerUsageReportsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsageReports usageReports;
    public ReportsCustomerUsageReportsGetResponse withUsageReports(openapisdk.models.shared.UsageReports usageReports) {
        this.usageReports = usageReports;
        return this;
    }
}