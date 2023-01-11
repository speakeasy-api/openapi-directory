package openapisdk.models.operations;



public class AnalyticsManagementUnsampledReportsGetResponse {
    public String contentType;
    public AnalyticsManagementUnsampledReportsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementUnsampledReportsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnsampledReport unsampledReport;
    public AnalyticsManagementUnsampledReportsGetResponse withUnsampledReport(openapisdk.models.shared.UnsampledReport unsampledReport) {
        this.unsampledReport = unsampledReport;
        return this;
    }
}