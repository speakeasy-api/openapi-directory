package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesCreateRequest {
    public RunProjectsLocationsServicesCreatePathParams pathParams;
    public RunProjectsLocationsServicesCreateRequest withPathParams(RunProjectsLocationsServicesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsServicesCreateQueryParams queryParams;
    public RunProjectsLocationsServicesCreateRequest withQueryParams(RunProjectsLocationsServicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRunV2ServiceInput request;
    public RunProjectsLocationsServicesCreateRequest withRequest(openapisdk.models.shared.GoogleCloudRunV2ServiceInput request) {
        this.request = request;
        return this;
    }
    public RunProjectsLocationsServicesCreateSecurity security;
    public RunProjectsLocationsServicesCreateRequest withSecurity(RunProjectsLocationsServicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}