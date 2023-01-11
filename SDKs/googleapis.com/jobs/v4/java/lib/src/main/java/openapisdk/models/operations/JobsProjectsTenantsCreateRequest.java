package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsCreateRequest {
    public JobsProjectsTenantsCreatePathParams pathParams;
    public JobsProjectsTenantsCreateRequest withPathParams(JobsProjectsTenantsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsCreateQueryParams queryParams;
    public JobsProjectsTenantsCreateRequest withQueryParams(JobsProjectsTenantsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Tenant request;
    public JobsProjectsTenantsCreateRequest withRequest(openapisdk.models.shared.Tenant request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsCreateSecurity security;
    public JobsProjectsTenantsCreateRequest withSecurity(JobsProjectsTenantsCreateSecurity security) {
        this.security = security;
        return this;
    }
}