package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsCreateRequest {
    public JobsProjectsTenantsJobsCreatePathParams pathParams;
    public JobsProjectsTenantsJobsCreateRequest withPathParams(JobsProjectsTenantsJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsJobsCreateQueryParams queryParams;
    public JobsProjectsTenantsJobsCreateRequest withQueryParams(JobsProjectsTenantsJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobInput request;
    public JobsProjectsTenantsJobsCreateRequest withRequest(openapisdk.models.shared.JobInput request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsJobsCreateSecurity security;
    public JobsProjectsTenantsJobsCreateRequest withSecurity(JobsProjectsTenantsJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}