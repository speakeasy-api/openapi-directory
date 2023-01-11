package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesServiceLevelObjectivesCreateRequest {
    public MonitoringServicesServiceLevelObjectivesCreatePathParams pathParams;
    public MonitoringServicesServiceLevelObjectivesCreateRequest withPathParams(MonitoringServicesServiceLevelObjectivesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringServicesServiceLevelObjectivesCreateQueryParams queryParams;
    public MonitoringServicesServiceLevelObjectivesCreateRequest withQueryParams(MonitoringServicesServiceLevelObjectivesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceLevelObjective request;
    public MonitoringServicesServiceLevelObjectivesCreateRequest withRequest(openapisdk.models.shared.ServiceLevelObjective request) {
        this.request = request;
        return this;
    }
    public MonitoringServicesServiceLevelObjectivesCreateSecurity security;
    public MonitoringServicesServiceLevelObjectivesCreateRequest withSecurity(MonitoringServicesServiceLevelObjectivesCreateSecurity security) {
        this.security = security;
        return this;
    }
}