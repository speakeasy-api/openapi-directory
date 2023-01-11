package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsOperationsCancelRequest {
    public MemcacheProjectsLocationsOperationsCancelPathParams pathParams;
    public MemcacheProjectsLocationsOperationsCancelRequest withPathParams(MemcacheProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsOperationsCancelQueryParams queryParams;
    public MemcacheProjectsLocationsOperationsCancelRequest withQueryParams(MemcacheProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MemcacheProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public MemcacheProjectsLocationsOperationsCancelSecurity security;
    public MemcacheProjectsLocationsOperationsCancelRequest withSecurity(MemcacheProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}