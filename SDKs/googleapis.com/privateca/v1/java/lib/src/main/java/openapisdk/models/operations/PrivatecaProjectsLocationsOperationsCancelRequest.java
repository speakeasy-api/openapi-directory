package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsOperationsCancelRequest {
    public PrivatecaProjectsLocationsOperationsCancelPathParams pathParams;
    public PrivatecaProjectsLocationsOperationsCancelRequest withPathParams(PrivatecaProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsOperationsCancelQueryParams queryParams;
    public PrivatecaProjectsLocationsOperationsCancelRequest withQueryParams(PrivatecaProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PrivatecaProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsOperationsCancelSecurity security;
    public PrivatecaProjectsLocationsOperationsCancelRequest withSecurity(PrivatecaProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}