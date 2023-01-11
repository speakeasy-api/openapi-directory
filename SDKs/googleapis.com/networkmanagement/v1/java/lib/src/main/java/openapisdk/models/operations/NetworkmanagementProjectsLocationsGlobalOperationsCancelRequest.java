package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest {
    public NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams pathParams;
    public NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest withPathParams(NetworkmanagementProjectsLocationsGlobalOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams queryParams;
    public NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest withQueryParams(NetworkmanagementProjectsLocationsGlobalOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity security;
    public NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest withSecurity(NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}