package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest {
    public MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams pathParams;
    public MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest withPathParams(MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams queryParams;
    public MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest withQueryParams(MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MonitoredProjectInput request;
    public MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest withRequest(openapisdk.models.shared.MonitoredProjectInput request) {
        this.request = request;
        return this;
    }
    public MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity security;
    public MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest withSecurity(MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity security) {
        this.security = security;
        return this;
    }
}