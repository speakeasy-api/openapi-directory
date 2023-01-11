package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsOperationsCancelRequest {
    public NetworksecurityProjectsLocationsOperationsCancelPathParams pathParams;
    public NetworksecurityProjectsLocationsOperationsCancelRequest withPathParams(NetworksecurityProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworksecurityProjectsLocationsOperationsCancelQueryParams queryParams;
    public NetworksecurityProjectsLocationsOperationsCancelRequest withQueryParams(NetworksecurityProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public NetworksecurityProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public NetworksecurityProjectsLocationsOperationsCancelSecurity security;
    public NetworksecurityProjectsLocationsOperationsCancelRequest withSecurity(NetworksecurityProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}