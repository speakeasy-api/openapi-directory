package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsWorkerPoolsCreateRequest {
    public CloudbuildProjectsWorkerPoolsCreatePathParams pathParams;
    public CloudbuildProjectsWorkerPoolsCreateRequest withPathParams(CloudbuildProjectsWorkerPoolsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbuildProjectsWorkerPoolsCreateQueryParams queryParams;
    public CloudbuildProjectsWorkerPoolsCreateRequest withQueryParams(CloudbuildProjectsWorkerPoolsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkerPoolInput request;
    public CloudbuildProjectsWorkerPoolsCreateRequest withRequest(openapisdk.models.shared.WorkerPoolInput request) {
        this.request = request;
        return this;
    }
    public CloudbuildProjectsWorkerPoolsCreateSecurity security;
    public CloudbuildProjectsWorkerPoolsCreateRequest withSecurity(CloudbuildProjectsWorkerPoolsCreateSecurity security) {
        this.security = security;
        return this;
    }
}