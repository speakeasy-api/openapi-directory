package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsLocationsWorkerPoolsCreateRequest {
    public CloudbuildProjectsLocationsWorkerPoolsCreatePathParams pathParams;
    public CloudbuildProjectsLocationsWorkerPoolsCreateRequest withPathParams(CloudbuildProjectsLocationsWorkerPoolsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams queryParams;
    public CloudbuildProjectsLocationsWorkerPoolsCreateRequest withQueryParams(CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkerPoolInput request;
    public CloudbuildProjectsLocationsWorkerPoolsCreateRequest withRequest(openapisdk.models.shared.WorkerPoolInput request) {
        this.request = request;
        return this;
    }
    public CloudbuildProjectsLocationsWorkerPoolsCreateSecurity security;
    public CloudbuildProjectsLocationsWorkerPoolsCreateRequest withSecurity(CloudbuildProjectsLocationsWorkerPoolsCreateSecurity security) {
        this.security = security;
        return this;
    }
}