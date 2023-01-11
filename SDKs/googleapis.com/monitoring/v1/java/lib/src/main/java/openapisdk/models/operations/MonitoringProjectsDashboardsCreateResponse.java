package openapisdk.models.operations;



public class MonitoringProjectsDashboardsCreateResponse {
    public String contentType;
    public MonitoringProjectsDashboardsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dashboard dashboard;
    public MonitoringProjectsDashboardsCreateResponse withDashboard(openapisdk.models.shared.Dashboard dashboard) {
        this.dashboard = dashboard;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsDashboardsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}