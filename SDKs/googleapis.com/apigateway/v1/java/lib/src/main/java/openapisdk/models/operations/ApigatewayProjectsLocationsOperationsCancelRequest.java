package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsOperationsCancelRequest {
    public ApigatewayProjectsLocationsOperationsCancelPathParams pathParams;
    public ApigatewayProjectsLocationsOperationsCancelRequest withPathParams(ApigatewayProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsOperationsCancelQueryParams queryParams;
    public ApigatewayProjectsLocationsOperationsCancelRequest withQueryParams(ApigatewayProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ApigatewayProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public ApigatewayProjectsLocationsOperationsCancelSecurity security;
    public ApigatewayProjectsLocationsOperationsCancelRequest withSecurity(ApigatewayProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}