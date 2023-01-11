package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsCreateRequest {
    public CloudschedulerProjectsLocationsJobsCreatePathParams pathParams;
    public CloudschedulerProjectsLocationsJobsCreateRequest withPathParams(CloudschedulerProjectsLocationsJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsCreateQueryParams queryParams;
    public CloudschedulerProjectsLocationsJobsCreateRequest withQueryParams(CloudschedulerProjectsLocationsJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Job request;
    public CloudschedulerProjectsLocationsJobsCreateRequest withRequest(openapisdk.models.shared.Job request) {
        this.request = request;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsCreateSecurity security;
    public CloudschedulerProjectsLocationsJobsCreateRequest withSecurity(CloudschedulerProjectsLocationsJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}