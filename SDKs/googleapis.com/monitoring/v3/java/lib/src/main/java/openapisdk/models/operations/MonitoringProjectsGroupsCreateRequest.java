package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsGroupsCreateRequest {
    public MonitoringProjectsGroupsCreatePathParams pathParams;
    public MonitoringProjectsGroupsCreateRequest withPathParams(MonitoringProjectsGroupsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsGroupsCreateQueryParams queryParams;
    public MonitoringProjectsGroupsCreateRequest withQueryParams(MonitoringProjectsGroupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public MonitoringProjectsGroupsCreateRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsGroupsCreateSecurity security;
    public MonitoringProjectsGroupsCreateRequest withSecurity(MonitoringProjectsGroupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}