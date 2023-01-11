package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsOperationsCancelRequest {
    public DatastreamProjectsLocationsOperationsCancelPathParams pathParams;
    public DatastreamProjectsLocationsOperationsCancelRequest withPathParams(DatastreamProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsOperationsCancelQueryParams queryParams;
    public DatastreamProjectsLocationsOperationsCancelRequest withQueryParams(DatastreamProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatastreamProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsOperationsCancelSecurity security;
    public DatastreamProjectsLocationsOperationsCancelRequest withSecurity(DatastreamProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}