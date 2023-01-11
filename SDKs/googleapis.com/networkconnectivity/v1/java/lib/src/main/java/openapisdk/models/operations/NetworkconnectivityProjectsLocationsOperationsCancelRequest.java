package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsOperationsCancelRequest {
    public NetworkconnectivityProjectsLocationsOperationsCancelPathParams pathParams;
    public NetworkconnectivityProjectsLocationsOperationsCancelRequest withPathParams(NetworkconnectivityProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkconnectivityProjectsLocationsOperationsCancelQueryParams queryParams;
    public NetworkconnectivityProjectsLocationsOperationsCancelRequest withQueryParams(NetworkconnectivityProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public NetworkconnectivityProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public NetworkconnectivityProjectsLocationsOperationsCancelSecurity security;
    public NetworkconnectivityProjectsLocationsOperationsCancelRequest withSecurity(NetworkconnectivityProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}