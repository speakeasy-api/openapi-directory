package openapisdk.models.operations;



public class MonitoringProjectsDashboardsPatchResponse {
    public String contentType;
    public MonitoringProjectsDashboardsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dashboard dashboard;
    public MonitoringProjectsDashboardsPatchResponse withDashboard(openapisdk.models.shared.Dashboard dashboard) {
        this.dashboard = dashboard;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsDashboardsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}