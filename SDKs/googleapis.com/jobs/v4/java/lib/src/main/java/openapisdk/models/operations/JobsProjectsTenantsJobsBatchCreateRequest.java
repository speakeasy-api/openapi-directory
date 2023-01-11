package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsBatchCreateRequest {
    public JobsProjectsTenantsJobsBatchCreatePathParams pathParams;
    public JobsProjectsTenantsJobsBatchCreateRequest withPathParams(JobsProjectsTenantsJobsBatchCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsJobsBatchCreateQueryParams queryParams;
    public JobsProjectsTenantsJobsBatchCreateRequest withQueryParams(JobsProjectsTenantsJobsBatchCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchCreateJobsRequestInput request;
    public JobsProjectsTenantsJobsBatchCreateRequest withRequest(openapisdk.models.shared.BatchCreateJobsRequestInput request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsJobsBatchCreateSecurity security;
    public JobsProjectsTenantsJobsBatchCreateRequest withSecurity(JobsProjectsTenantsJobsBatchCreateSecurity security) {
        this.security = security;
        return this;
    }
}