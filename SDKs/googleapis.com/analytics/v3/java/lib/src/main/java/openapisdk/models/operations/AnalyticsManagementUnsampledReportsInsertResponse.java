package openapisdk.models.operations;



public class AnalyticsManagementUnsampledReportsInsertResponse {
    public String contentType;
    public AnalyticsManagementUnsampledReportsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementUnsampledReportsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnsampledReport unsampledReport;
    public AnalyticsManagementUnsampledReportsInsertResponse withUnsampledReport(openapisdk.models.shared.UnsampledReport unsampledReport) {
        this.unsampledReport = unsampledReport;
        return this;
    }
}