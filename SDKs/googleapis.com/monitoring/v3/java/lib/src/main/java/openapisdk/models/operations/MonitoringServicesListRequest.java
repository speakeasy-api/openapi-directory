package openapisdk.models.operations;



public class MonitoringServicesListRequest {
    public MonitoringServicesListPathParams pathParams;
    public MonitoringServicesListRequest withPathParams(MonitoringServicesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringServicesListQueryParams queryParams;
    public MonitoringServicesListRequest withQueryParams(MonitoringServicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringServicesListSecurity security;
    public MonitoringServicesListRequest withSecurity(MonitoringServicesListSecurity security) {
        this.security = security;
        return this;
    }
}