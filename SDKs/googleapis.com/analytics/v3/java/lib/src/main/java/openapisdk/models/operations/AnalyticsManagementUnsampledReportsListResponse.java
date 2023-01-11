package openapisdk.models.operations;



public class AnalyticsManagementUnsampledReportsListResponse {
    public String contentType;
    public AnalyticsManagementUnsampledReportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementUnsampledReportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnsampledReports unsampledReports;
    public AnalyticsManagementUnsampledReportsListResponse withUnsampledReports(openapisdk.models.shared.UnsampledReports unsampledReports) {
        this.unsampledReports = unsampledReports;
        return this;
    }
}