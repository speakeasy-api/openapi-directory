package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesJobsReplaceJobRequest {
    public RunNamespacesJobsReplaceJobPathParams pathParams;
    public RunNamespacesJobsReplaceJobRequest withPathParams(RunNamespacesJobsReplaceJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesJobsReplaceJobQueryParams queryParams;
    public RunNamespacesJobsReplaceJobRequest withQueryParams(RunNamespacesJobsReplaceJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Job request;
    public RunNamespacesJobsReplaceJobRequest withRequest(openapisdk.models.shared.Job request) {
        this.request = request;
        return this;
    }
    public RunNamespacesJobsReplaceJobSecurity security;
    public RunNamespacesJobsReplaceJobRequest withSecurity(RunNamespacesJobsReplaceJobSecurity security) {
        this.security = security;
        return this;
    }
}