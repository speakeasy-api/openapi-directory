package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesJobsCreateRequest {
    public RunNamespacesJobsCreatePathParams pathParams;
    public RunNamespacesJobsCreateRequest withPathParams(RunNamespacesJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesJobsCreateQueryParams queryParams;
    public RunNamespacesJobsCreateRequest withQueryParams(RunNamespacesJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Job request;
    public RunNamespacesJobsCreateRequest withRequest(openapisdk.models.shared.Job request) {
        this.request = request;
        return this;
    }
    public RunNamespacesJobsCreateSecurity security;
    public RunNamespacesJobsCreateRequest withSecurity(RunNamespacesJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}