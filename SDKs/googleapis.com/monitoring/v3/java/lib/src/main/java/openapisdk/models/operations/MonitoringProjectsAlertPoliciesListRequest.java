package openapisdk.models.operations;



public class MonitoringProjectsAlertPoliciesListRequest {
    public MonitoringProjectsAlertPoliciesListPathParams pathParams;
    public MonitoringProjectsAlertPoliciesListRequest withPathParams(MonitoringProjectsAlertPoliciesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsAlertPoliciesListQueryParams queryParams;
    public MonitoringProjectsAlertPoliciesListRequest withQueryParams(MonitoringProjectsAlertPoliciesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsAlertPoliciesListSecurity security;
    public MonitoringProjectsAlertPoliciesListRequest withSecurity(MonitoringProjectsAlertPoliciesListSecurity security) {
        this.security = security;
        return this;
    }
}