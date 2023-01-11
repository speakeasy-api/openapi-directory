package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsSearchForAlertRequest {
    public JobsProjectsJobsSearchForAlertPathParams pathParams;
    public JobsProjectsJobsSearchForAlertRequest withPathParams(JobsProjectsJobsSearchForAlertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsJobsSearchForAlertQueryParams queryParams;
    public JobsProjectsJobsSearchForAlertRequest withQueryParams(JobsProjectsJobsSearchForAlertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchJobsRequest request;
    public JobsProjectsJobsSearchForAlertRequest withRequest(openapisdk.models.shared.SearchJobsRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsJobsSearchForAlertSecurity security;
    public JobsProjectsJobsSearchForAlertRequest withSecurity(JobsProjectsJobsSearchForAlertSecurity security) {
        this.security = security;
        return this;
    }
}