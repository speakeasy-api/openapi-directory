package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsPatchRequest {
    public JobsProjectsJobsPatchPathParams pathParams;
    public JobsProjectsJobsPatchRequest withPathParams(JobsProjectsJobsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsJobsPatchQueryParams queryParams;
    public JobsProjectsJobsPatchRequest withQueryParams(JobsProjectsJobsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateJobRequest request;
    public JobsProjectsJobsPatchRequest withRequest(openapisdk.models.shared.UpdateJobRequest request) {
        this.request = request;
        return this;
    }
    public JobsProjectsJobsPatchSecurity security;
    public JobsProjectsJobsPatchRequest withSecurity(JobsProjectsJobsPatchSecurity security) {
        this.security = security;
        return this;
    }
}