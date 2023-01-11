package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsLocationsOperationsCancelRequest {
    public CloudbuildProjectsLocationsOperationsCancelPathParams pathParams;
    public CloudbuildProjectsLocationsOperationsCancelRequest withPathParams(CloudbuildProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbuildProjectsLocationsOperationsCancelQueryParams queryParams;
    public CloudbuildProjectsLocationsOperationsCancelRequest withQueryParams(CloudbuildProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudbuildProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudbuildProjectsLocationsOperationsCancelSecurity security;
    public CloudbuildProjectsLocationsOperationsCancelRequest withSecurity(CloudbuildProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}