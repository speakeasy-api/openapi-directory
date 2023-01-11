package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsSearchForAlertRequest {
    public JobsProjectsTenantsJobsSearchForAlertPathParams pathParams;
    public JobsProjectsTenantsJobsSearchForAlertRequest withPathParams(JobsProjectsTenantsJobsSearchForAlertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsJobsSearchForAlertQueryParams queryParams;
    public JobsProjectsTenantsJobsSearchForAlertRequest withQueryParams(JobsProjectsTenantsJobsSearchForAlertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchJobsRequest request;
    public JobsProjectsTenantsJobsSearchForAlertRequest withRequest(openapisdk.models.shared.SearchJobsRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsTenantsJobsSearchForAlertSecurity security;
    public JobsProjectsTenantsJobsSearchForAlertRequest withSecurity(JobsProjectsTenantsJobsSearchForAlertSecurity security) {
        this.security = security;
        return this;
    }
}