package openapisdk.models.operations;



public class MonitoringServicesServiceLevelObjectivesListRequest {
    public MonitoringServicesServiceLevelObjectivesListPathParams pathParams;
    public MonitoringServicesServiceLevelObjectivesListRequest withPathParams(MonitoringServicesServiceLevelObjectivesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringServicesServiceLevelObjectivesListQueryParams queryParams;
    public MonitoringServicesServiceLevelObjectivesListRequest withQueryParams(MonitoringServicesServiceLevelObjectivesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringServicesServiceLevelObjectivesListSecurity security;
    public MonitoringServicesServiceLevelObjectivesListRequest withSecurity(MonitoringServicesServiceLevelObjectivesListSecurity security) {
        this.security = security;
        return this;
    }
}