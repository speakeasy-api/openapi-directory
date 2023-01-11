package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsAlertPoliciesCreateRequest {
    public MonitoringProjectsAlertPoliciesCreatePathParams pathParams;
    public MonitoringProjectsAlertPoliciesCreateRequest withPathParams(MonitoringProjectsAlertPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsAlertPoliciesCreateQueryParams queryParams;
    public MonitoringProjectsAlertPoliciesCreateRequest withQueryParams(MonitoringProjectsAlertPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AlertPolicy request;
    public MonitoringProjectsAlertPoliciesCreateRequest withRequest(openapisdk.models.shared.AlertPolicy request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsAlertPoliciesCreateSecurity security;
    public MonitoringProjectsAlertPoliciesCreateRequest withSecurity(MonitoringProjectsAlertPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}