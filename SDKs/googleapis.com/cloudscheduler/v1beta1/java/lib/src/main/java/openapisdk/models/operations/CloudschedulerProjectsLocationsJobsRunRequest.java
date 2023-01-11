package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsRunRequest {
    public CloudschedulerProjectsLocationsJobsRunPathParams pathParams;
    public CloudschedulerProjectsLocationsJobsRunRequest withPathParams(CloudschedulerProjectsLocationsJobsRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsRunQueryParams queryParams;
    public CloudschedulerProjectsLocationsJobsRunRequest withQueryParams(CloudschedulerProjectsLocationsJobsRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RunJobRequest request;
    public CloudschedulerProjectsLocationsJobsRunRequest withRequest(openapisdk.models.shared.RunJobRequest request) {
        this.request = request;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsRunSecurity security;
    public CloudschedulerProjectsLocationsJobsRunRequest withSecurity(CloudschedulerProjectsLocationsJobsRunSecurity security) {
        this.security = security;
        return this;
    }
}