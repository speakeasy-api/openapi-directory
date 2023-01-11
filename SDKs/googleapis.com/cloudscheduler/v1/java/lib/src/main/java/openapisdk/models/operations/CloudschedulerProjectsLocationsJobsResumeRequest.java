package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsResumeRequest {
    public CloudschedulerProjectsLocationsJobsResumePathParams pathParams;
    public CloudschedulerProjectsLocationsJobsResumeRequest withPathParams(CloudschedulerProjectsLocationsJobsResumePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsResumeQueryParams queryParams;
    public CloudschedulerProjectsLocationsJobsResumeRequest withQueryParams(CloudschedulerProjectsLocationsJobsResumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudschedulerProjectsLocationsJobsResumeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsResumeSecurity security;
    public CloudschedulerProjectsLocationsJobsResumeRequest withSecurity(CloudschedulerProjectsLocationsJobsResumeSecurity security) {
        this.security = security;
        return this;
    }
}