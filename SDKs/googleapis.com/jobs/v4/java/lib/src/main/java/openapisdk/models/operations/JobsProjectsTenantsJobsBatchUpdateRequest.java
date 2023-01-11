package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsBatchUpdateRequest {
    public JobsProjectsTenantsJobsBatchUpdatePathParams pathParams;
    public JobsProjectsTenantsJobsBatchUpdateRequest withPathParams(JobsProjectsTenantsJobsBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsJobsBatchUpdateQueryParams queryParams;
    public JobsProjectsTenantsJobsBatchUpdateRequest withQueryParams(JobsProjectsTenantsJobsBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateJobsRequestInput request;
    public JobsProjectsTenantsJobsBatchUpdateRequest withRequest(openapisdk.models.shared.BatchUpdateJobsRequestInput request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsJobsBatchUpdateSecurity security;
    public JobsProjectsTenantsJobsBatchUpdateRequest withSecurity(JobsProjectsTenantsJobsBatchUpdateSecurity security) {
        this.security = security;
        return this;
    }
}