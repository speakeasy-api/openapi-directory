package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsOperationsCancelRequest {
    public NetworkservicesProjectsLocationsOperationsCancelPathParams pathParams;
    public NetworkservicesProjectsLocationsOperationsCancelRequest withPathParams(NetworkservicesProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsOperationsCancelQueryParams queryParams;
    public NetworkservicesProjectsLocationsOperationsCancelRequest withQueryParams(NetworkservicesProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public NetworkservicesProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsOperationsCancelSecurity security;
    public NetworkservicesProjectsLocationsOperationsCancelRequest withSecurity(NetworkservicesProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}