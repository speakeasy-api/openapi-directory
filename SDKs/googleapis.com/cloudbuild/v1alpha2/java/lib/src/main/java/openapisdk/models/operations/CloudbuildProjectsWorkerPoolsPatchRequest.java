package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsWorkerPoolsPatchRequest {
    public CloudbuildProjectsWorkerPoolsPatchPathParams pathParams;
    public CloudbuildProjectsWorkerPoolsPatchRequest withPathParams(CloudbuildProjectsWorkerPoolsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbuildProjectsWorkerPoolsPatchQueryParams queryParams;
    public CloudbuildProjectsWorkerPoolsPatchRequest withQueryParams(CloudbuildProjectsWorkerPoolsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkerPoolInput request;
    public CloudbuildProjectsWorkerPoolsPatchRequest withRequest(openapisdk.models.shared.WorkerPoolInput request) {
        this.request = request;
        return this;
    }
    public CloudbuildProjectsWorkerPoolsPatchSecurity security;
    public CloudbuildProjectsWorkerPoolsPatchRequest withSecurity(CloudbuildProjectsWorkerPoolsPatchSecurity security) {
        this.security = security;
        return this;
    }
}