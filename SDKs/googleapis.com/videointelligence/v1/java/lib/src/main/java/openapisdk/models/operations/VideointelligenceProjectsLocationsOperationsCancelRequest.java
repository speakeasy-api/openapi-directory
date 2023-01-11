package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VideointelligenceProjectsLocationsOperationsCancelRequest {
    public VideointelligenceProjectsLocationsOperationsCancelPathParams pathParams;
    public VideointelligenceProjectsLocationsOperationsCancelRequest withPathParams(VideointelligenceProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VideointelligenceProjectsLocationsOperationsCancelQueryParams queryParams;
    public VideointelligenceProjectsLocationsOperationsCancelRequest withQueryParams(VideointelligenceProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public VideointelligenceProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public VideointelligenceProjectsLocationsOperationsCancelSecurity security;
    public VideointelligenceProjectsLocationsOperationsCancelRequest withSecurity(VideointelligenceProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}