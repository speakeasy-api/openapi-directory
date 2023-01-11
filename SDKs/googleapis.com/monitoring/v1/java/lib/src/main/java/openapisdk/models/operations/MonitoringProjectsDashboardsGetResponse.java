package openapisdk.models.operations;



public class MonitoringProjectsDashboardsGetResponse {
    public String contentType;
    public MonitoringProjectsDashboardsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dashboard dashboard;
    public MonitoringProjectsDashboardsGetResponse withDashboard(openapisdk.models.shared.Dashboard dashboard) {
        this.dashboard = dashboard;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsDashboardsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}