package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsJobsSubmitRequest {
    public DataprocProjectsRegionsJobsSubmitPathParams pathParams;
    public DataprocProjectsRegionsJobsSubmitRequest withPathParams(DataprocProjectsRegionsJobsSubmitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsJobsSubmitQueryParams queryParams;
    public DataprocProjectsRegionsJobsSubmitRequest withQueryParams(DataprocProjectsRegionsJobsSubmitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitJobRequestInput request;
    public DataprocProjectsRegionsJobsSubmitRequest withRequest(openapisdk.models.shared.SubmitJobRequestInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsJobsSubmitSecurity security;
    public DataprocProjectsRegionsJobsSubmitRequest withSecurity(DataprocProjectsRegionsJobsSubmitSecurity security) {
        this.security = security;
        return this;
    }
}