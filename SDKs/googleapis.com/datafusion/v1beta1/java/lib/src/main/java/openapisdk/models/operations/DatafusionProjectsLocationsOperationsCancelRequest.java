package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsOperationsCancelRequest {
    public DatafusionProjectsLocationsOperationsCancelPathParams pathParams;
    public DatafusionProjectsLocationsOperationsCancelRequest withPathParams(DatafusionProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsOperationsCancelQueryParams queryParams;
    public DatafusionProjectsLocationsOperationsCancelRequest withQueryParams(DatafusionProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatafusionProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsOperationsCancelSecurity security;
    public DatafusionProjectsLocationsOperationsCancelRequest withSecurity(DatafusionProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}