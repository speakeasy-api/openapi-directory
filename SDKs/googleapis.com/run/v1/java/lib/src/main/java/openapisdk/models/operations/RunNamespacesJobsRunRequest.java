package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesJobsRunRequest {
    public RunNamespacesJobsRunPathParams pathParams;
    public RunNamespacesJobsRunRequest withPathParams(RunNamespacesJobsRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesJobsRunQueryParams queryParams;
    public RunNamespacesJobsRunRequest withQueryParams(RunNamespacesJobsRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RunNamespacesJobsRunRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RunNamespacesJobsRunSecurity security;
    public RunNamespacesJobsRunRequest withSecurity(RunNamespacesJobsRunSecurity security) {
        this.security = security;
        return this;
    }
}