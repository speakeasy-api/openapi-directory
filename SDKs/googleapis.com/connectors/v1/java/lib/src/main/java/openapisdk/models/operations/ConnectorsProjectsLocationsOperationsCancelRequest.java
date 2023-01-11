package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsOperationsCancelRequest {
    public ConnectorsProjectsLocationsOperationsCancelPathParams pathParams;
    public ConnectorsProjectsLocationsOperationsCancelRequest withPathParams(ConnectorsProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsOperationsCancelQueryParams queryParams;
    public ConnectorsProjectsLocationsOperationsCancelRequest withQueryParams(ConnectorsProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ConnectorsProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsOperationsCancelSecurity security;
    public ConnectorsProjectsLocationsOperationsCancelRequest withSecurity(ConnectorsProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}