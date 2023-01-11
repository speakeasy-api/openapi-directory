package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsBatchDeleteRequest {
    public JobsProjectsTenantsJobsBatchDeletePathParams pathParams;
    public JobsProjectsTenantsJobsBatchDeleteRequest withPathParams(JobsProjectsTenantsJobsBatchDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsJobsBatchDeleteQueryParams queryParams;
    public JobsProjectsTenantsJobsBatchDeleteRequest withQueryParams(JobsProjectsTenantsJobsBatchDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteJobsRequest request;
    public JobsProjectsTenantsJobsBatchDeleteRequest withRequest(openapisdk.models.shared.BatchDeleteJobsRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsJobsBatchDeleteSecurity security;
    public JobsProjectsTenantsJobsBatchDeleteRequest withSecurity(JobsProjectsTenantsJobsBatchDeleteSecurity security) {
        this.security = security;
        return this;
    }
}