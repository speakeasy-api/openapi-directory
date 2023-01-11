package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsJobsCreateRequest {
    public RunProjectsLocationsJobsCreatePathParams pathParams;
    public RunProjectsLocationsJobsCreateRequest withPathParams(RunProjectsLocationsJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsJobsCreateQueryParams queryParams;
    public RunProjectsLocationsJobsCreateRequest withQueryParams(RunProjectsLocationsJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRunV2JobInput request;
    public RunProjectsLocationsJobsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudRunV2JobInput request) {
        this.request = request;
        return this;
    }
    public RunProjectsLocationsJobsCreateSecurity security;
    public RunProjectsLocationsJobsCreateRequest withSecurity(RunProjectsLocationsJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}