package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsSearchRequest {
    public JobsProjectsJobsSearchPathParams pathParams;
    public JobsProjectsJobsSearchRequest withPathParams(JobsProjectsJobsSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsJobsSearchQueryParams queryParams;
    public JobsProjectsJobsSearchRequest withQueryParams(JobsProjectsJobsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchJobsRequest request;
    public JobsProjectsJobsSearchRequest withRequest(openapisdk.models.shared.SearchJobsRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsJobsSearchSecurity security;
    public JobsProjectsJobsSearchRequest withSecurity(JobsProjectsJobsSearchSecurity security) {
        this.security = security;
        return this;
    }
}