package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsApisCreateRequest {
    public ApigatewayProjectsLocationsApisCreatePathParams pathParams;
    public ApigatewayProjectsLocationsApisCreateRequest withPathParams(ApigatewayProjectsLocationsApisCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsApisCreateQueryParams queryParams;
    public ApigatewayProjectsLocationsApisCreateRequest withQueryParams(ApigatewayProjectsLocationsApisCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApigatewayApiInput request;
    public ApigatewayProjectsLocationsApisCreateRequest withRequest(openapisdk.models.shared.ApigatewayApiInput request) {
        this.request = request;
        return this;
    }
    public ApigatewayProjectsLocationsApisCreateSecurity security;
    public ApigatewayProjectsLocationsApisCreateRequest withSecurity(ApigatewayProjectsLocationsApisCreateSecurity security) {
        this.security = security;
        return this;
    }
}