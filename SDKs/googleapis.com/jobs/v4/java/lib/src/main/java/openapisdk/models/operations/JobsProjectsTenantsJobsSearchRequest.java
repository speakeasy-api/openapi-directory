package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsSearchRequest {
    public JobsProjectsTenantsJobsSearchPathParams pathParams;
    public JobsProjectsTenantsJobsSearchRequest withPathParams(JobsProjectsTenantsJobsSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsJobsSearchQueryParams queryParams;
    public JobsProjectsTenantsJobsSearchRequest withQueryParams(JobsProjectsTenantsJobsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchJobsRequest request;
    public JobsProjectsTenantsJobsSearchRequest withRequest(openapisdk.models.shared.SearchJobsRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsJobsSearchSecurity security;
    public JobsProjectsTenantsJobsSearchRequest withSecurity(JobsProjectsTenantsJobsSearchSecurity security) {
        this.security = security;
        return this;
    }
}