package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsGatewaysPatchRequest {
    public ApigatewayProjectsLocationsGatewaysPatchPathParams pathParams;
    public ApigatewayProjectsLocationsGatewaysPatchRequest withPathParams(ApigatewayProjectsLocationsGatewaysPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsGatewaysPatchQueryParams queryParams;
    public ApigatewayProjectsLocationsGatewaysPatchRequest withQueryParams(ApigatewayProjectsLocationsGatewaysPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApigatewayGatewayInput request;
    public ApigatewayProjectsLocationsGatewaysPatchRequest withRequest(openapisdk.models.shared.ApigatewayGatewayInput request) {
        this.request = request;
        return this;
    }
    public ApigatewayProjectsLocationsGatewaysPatchSecurity security;
    public ApigatewayProjectsLocationsGatewaysPatchRequest withSecurity(ApigatewayProjectsLocationsGatewaysPatchSecurity security) {
        this.security = security;
        return this;
    }
}