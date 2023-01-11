package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsJobsRunRequest {
    public RunProjectsLocationsJobsRunPathParams pathParams;
    public RunProjectsLocationsJobsRunRequest withPathParams(RunProjectsLocationsJobsRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsJobsRunQueryParams queryParams;
    public RunProjectsLocationsJobsRunRequest withQueryParams(RunProjectsLocationsJobsRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRunV2RunJobRequest request;
    public RunProjectsLocationsJobsRunRequest withRequest(openapisdk.models.shared.GoogleCloudRunV2RunJobRequest request) {
        this.request = request;
        return this;
    }
    public RunProjectsLocationsJobsRunSecurity security;
    public RunProjectsLocationsJobsRunRequest withSecurity(RunProjectsLocationsJobsRunSecurity security) {
        this.security = security;
        return this;
    }
}