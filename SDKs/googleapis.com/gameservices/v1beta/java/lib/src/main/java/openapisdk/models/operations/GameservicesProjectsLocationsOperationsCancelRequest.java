package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameservicesProjectsLocationsOperationsCancelRequest {
    public GameservicesProjectsLocationsOperationsCancelPathParams pathParams;
    public GameservicesProjectsLocationsOperationsCancelRequest withPathParams(GameservicesProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GameservicesProjectsLocationsOperationsCancelQueryParams queryParams;
    public GameservicesProjectsLocationsOperationsCancelRequest withQueryParams(GameservicesProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GameservicesProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public GameservicesProjectsLocationsOperationsCancelSecurity security;
    public GameservicesProjectsLocationsOperationsCancelRequest withSecurity(GameservicesProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}