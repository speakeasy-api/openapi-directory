package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsGatewaysCreateRequest {
    public ApigatewayProjectsLocationsGatewaysCreatePathParams pathParams;
    public ApigatewayProjectsLocationsGatewaysCreateRequest withPathParams(ApigatewayProjectsLocationsGatewaysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsGatewaysCreateQueryParams queryParams;
    public ApigatewayProjectsLocationsGatewaysCreateRequest withQueryParams(ApigatewayProjectsLocationsGatewaysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApigatewayGatewayInput request;
    public ApigatewayProjectsLocationsGatewaysCreateRequest withRequest(openapisdk.models.shared.ApigatewayGatewayInput request) {
        this.request = request;
        return this;
    }
    public ApigatewayProjectsLocationsGatewaysCreateSecurity security;
    public ApigatewayProjectsLocationsGatewaysCreateRequest withSecurity(ApigatewayProjectsLocationsGatewaysCreateSecurity security) {
        this.security = security;
        return this;
    }
}