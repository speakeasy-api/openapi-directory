package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesPatchRequest {
    public RunProjectsLocationsServicesPatchPathParams pathParams;
    public RunProjectsLocationsServicesPatchRequest withPathParams(RunProjectsLocationsServicesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsServicesPatchQueryParams queryParams;
    public RunProjectsLocationsServicesPatchRequest withQueryParams(RunProjectsLocationsServicesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRunV2ServiceInput request;
    public RunProjectsLocationsServicesPatchRequest withRequest(openapisdk.models.shared.GoogleCloudRunV2ServiceInput request) {
        this.request = request;
        return this;
    }
    public RunProjectsLocationsServicesPatchSecurity security;
    public RunProjectsLocationsServicesPatchRequest withSecurity(RunProjectsLocationsServicesPatchSecurity security) {
        this.security = security;
        return this;
    }
}