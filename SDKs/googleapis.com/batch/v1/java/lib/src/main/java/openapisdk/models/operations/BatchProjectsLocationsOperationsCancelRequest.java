package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsOperationsCancelRequest {
    public BatchProjectsLocationsOperationsCancelPathParams pathParams;
    public BatchProjectsLocationsOperationsCancelRequest withPathParams(BatchProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchProjectsLocationsOperationsCancelQueryParams queryParams;
    public BatchProjectsLocationsOperationsCancelRequest withQueryParams(BatchProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public BatchProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public BatchProjectsLocationsOperationsCancelSecurity security;
    public BatchProjectsLocationsOperationsCancelRequest withSecurity(BatchProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}