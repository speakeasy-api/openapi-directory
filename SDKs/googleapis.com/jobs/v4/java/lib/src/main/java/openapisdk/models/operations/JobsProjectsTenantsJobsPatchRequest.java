package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsPatchRequest {
    public JobsProjectsTenantsJobsPatchPathParams pathParams;
    public JobsProjectsTenantsJobsPatchRequest withPathParams(JobsProjectsTenantsJobsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsJobsPatchQueryParams queryParams;
    public JobsProjectsTenantsJobsPatchRequest withQueryParams(JobsProjectsTenantsJobsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobInput request;
    public JobsProjectsTenantsJobsPatchRequest withRequest(openapisdk.models.shared.JobInput request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsJobsPatchSecurity security;
    public JobsProjectsTenantsJobsPatchRequest withSecurity(JobsProjectsTenantsJobsPatchSecurity security) {
        this.security = security;
        return this;
    }
}