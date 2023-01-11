package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsCreateRequest {
    public JobsProjectsJobsCreatePathParams pathParams;
    public JobsProjectsJobsCreateRequest withPathParams(JobsProjectsJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsJobsCreateQueryParams queryParams;
    public JobsProjectsJobsCreateRequest withQueryParams(JobsProjectsJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateJobRequest request;
    public JobsProjectsJobsCreateRequest withRequest(openapisdk.models.shared.CreateJobRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsJobsCreateSecurity security;
    public JobsProjectsJobsCreateRequest withSecurity(JobsProjectsJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}