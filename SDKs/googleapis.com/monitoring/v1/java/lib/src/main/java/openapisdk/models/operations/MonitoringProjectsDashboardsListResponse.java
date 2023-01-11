package openapisdk.models.operations;



public class MonitoringProjectsDashboardsListResponse {
    public String contentType;
    public MonitoringProjectsDashboardsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDashboardsResponse listDashboardsResponse;
    public MonitoringProjectsDashboardsListResponse withListDashboardsResponse(openapisdk.models.shared.ListDashboardsResponse listDashboardsResponse) {
        this.listDashboardsResponse = listDashboardsResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsDashboardsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}