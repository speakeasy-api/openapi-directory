package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsJobsCreateRequest {
    public BatchProjectsLocationsJobsCreatePathParams pathParams;
    public BatchProjectsLocationsJobsCreateRequest withPathParams(BatchProjectsLocationsJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchProjectsLocationsJobsCreateQueryParams queryParams;
    public BatchProjectsLocationsJobsCreateRequest withQueryParams(BatchProjectsLocationsJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobInput request;
    public BatchProjectsLocationsJobsCreateRequest withRequest(openapisdk.models.shared.JobInput request) {
        this.request = request;
        return this;
    }
    public BatchProjectsLocationsJobsCreateSecurity security;
    public BatchProjectsLocationsJobsCreateRequest withSecurity(BatchProjectsLocationsJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}