package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsCompaniesCreateRequest {
    public JobsProjectsTenantsCompaniesCreatePathParams pathParams;
    public JobsProjectsTenantsCompaniesCreateRequest withPathParams(JobsProjectsTenantsCompaniesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsCompaniesCreateQueryParams queryParams;
    public JobsProjectsTenantsCompaniesCreateRequest withQueryParams(JobsProjectsTenantsCompaniesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompanyInput request;
    public JobsProjectsTenantsCompaniesCreateRequest withRequest(openapisdk.models.shared.CompanyInput request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsCompaniesCreateSecurity security;
    public JobsProjectsTenantsCompaniesCreateRequest withSecurity(JobsProjectsTenantsCompaniesCreateSecurity security) {
        this.security = security;
        return this;
    }
}