package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsJobsSubmitAsOperationRequest {
    public DataprocProjectsRegionsJobsSubmitAsOperationPathParams pathParams;
    public DataprocProjectsRegionsJobsSubmitAsOperationRequest withPathParams(DataprocProjectsRegionsJobsSubmitAsOperationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsJobsSubmitAsOperationQueryParams queryParams;
    public DataprocProjectsRegionsJobsSubmitAsOperationRequest withQueryParams(DataprocProjectsRegionsJobsSubmitAsOperationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitJobRequestInput request;
    public DataprocProjectsRegionsJobsSubmitAsOperationRequest withRequest(openapisdk.models.shared.SubmitJobRequestInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsJobsSubmitAsOperationSecurity security;
    public DataprocProjectsRegionsJobsSubmitAsOperationRequest withSecurity(DataprocProjectsRegionsJobsSubmitAsOperationSecurity security) {
        this.security = security;
        return this;
    }
}