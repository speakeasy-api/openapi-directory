package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsGroupsUpdateRequest {
    public MonitoringProjectsGroupsUpdatePathParams pathParams;
    public MonitoringProjectsGroupsUpdateRequest withPathParams(MonitoringProjectsGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsGroupsUpdateQueryParams queryParams;
    public MonitoringProjectsGroupsUpdateRequest withQueryParams(MonitoringProjectsGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public MonitoringProjectsGroupsUpdateRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsGroupsUpdateSecurity security;
    public MonitoringProjectsGroupsUpdateRequest withSecurity(MonitoringProjectsGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}