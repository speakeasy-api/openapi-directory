package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsLocationsWorkerPoolsPatchRequest {
    public CloudbuildProjectsLocationsWorkerPoolsPatchPathParams pathParams;
    public CloudbuildProjectsLocationsWorkerPoolsPatchRequest withPathParams(CloudbuildProjectsLocationsWorkerPoolsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams queryParams;
    public CloudbuildProjectsLocationsWorkerPoolsPatchRequest withQueryParams(CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkerPoolInput request;
    public CloudbuildProjectsLocationsWorkerPoolsPatchRequest withRequest(openapisdk.models.shared.WorkerPoolInput request) {
        this.request = request;
        return this;
    }
    public CloudbuildProjectsLocationsWorkerPoolsPatchSecurity security;
    public CloudbuildProjectsLocationsWorkerPoolsPatchRequest withSecurity(CloudbuildProjectsLocationsWorkerPoolsPatchSecurity security) {
        this.security = security;
        return this;
    }
}