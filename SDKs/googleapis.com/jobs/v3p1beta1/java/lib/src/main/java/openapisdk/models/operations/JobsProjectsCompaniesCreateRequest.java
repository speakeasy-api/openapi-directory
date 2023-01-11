package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsCompaniesCreateRequest {
    public JobsProjectsCompaniesCreatePathParams pathParams;
    public JobsProjectsCompaniesCreateRequest withPathParams(JobsProjectsCompaniesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsCompaniesCreateQueryParams queryParams;
    public JobsProjectsCompaniesCreateRequest withQueryParams(JobsProjectsCompaniesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCompanyRequest request;
    public JobsProjectsCompaniesCreateRequest withRequest(openapisdk.models.shared.CreateCompanyRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsCompaniesCreateSecurity security;
    public JobsProjectsCompaniesCreateRequest withSecurity(JobsProjectsCompaniesCreateSecurity security) {
        this.security = security;
        return this;
    }
}