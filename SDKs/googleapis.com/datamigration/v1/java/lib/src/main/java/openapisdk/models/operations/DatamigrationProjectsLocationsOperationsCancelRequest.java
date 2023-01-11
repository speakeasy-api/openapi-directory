package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsOperationsCancelRequest {
    public DatamigrationProjectsLocationsOperationsCancelPathParams pathParams;
    public DatamigrationProjectsLocationsOperationsCancelRequest withPathParams(DatamigrationProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsOperationsCancelQueryParams queryParams;
    public DatamigrationProjectsLocationsOperationsCancelRequest withQueryParams(DatamigrationProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatamigrationProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsOperationsCancelSecurity security;
    public DatamigrationProjectsLocationsOperationsCancelRequest withSecurity(DatamigrationProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}