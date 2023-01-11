package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesServiceLevelObjectivesPatchRequest {
    public MonitoringServicesServiceLevelObjectivesPatchPathParams pathParams;
    public MonitoringServicesServiceLevelObjectivesPatchRequest withPathParams(MonitoringServicesServiceLevelObjectivesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringServicesServiceLevelObjectivesPatchQueryParams queryParams;
    public MonitoringServicesServiceLevelObjectivesPatchRequest withQueryParams(MonitoringServicesServiceLevelObjectivesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceLevelObjective request;
    public MonitoringServicesServiceLevelObjectivesPatchRequest withRequest(openapisdk.models.shared.ServiceLevelObjective request) {
        this.request = request;
        return this;
    }
    public MonitoringServicesServiceLevelObjectivesPatchSecurity security;
    public MonitoringServicesServiceLevelObjectivesPatchRequest withSecurity(MonitoringServicesServiceLevelObjectivesPatchSecurity security) {
        this.security = security;
        return this;
    }
}