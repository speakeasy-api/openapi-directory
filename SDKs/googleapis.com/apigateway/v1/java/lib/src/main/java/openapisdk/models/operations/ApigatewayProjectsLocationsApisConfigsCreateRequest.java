package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsApisConfigsCreateRequest {
    public ApigatewayProjectsLocationsApisConfigsCreatePathParams pathParams;
    public ApigatewayProjectsLocationsApisConfigsCreateRequest withPathParams(ApigatewayProjectsLocationsApisConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsApisConfigsCreateQueryParams queryParams;
    public ApigatewayProjectsLocationsApisConfigsCreateRequest withQueryParams(ApigatewayProjectsLocationsApisConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApigatewayApiConfigInput request;
    public ApigatewayProjectsLocationsApisConfigsCreateRequest withRequest(openapisdk.models.shared.ApigatewayApiConfigInput request) {
        this.request = request;
        return this;
    }
    public ApigatewayProjectsLocationsApisConfigsCreateSecurity security;
    public ApigatewayProjectsLocationsApisConfigsCreateRequest withSecurity(ApigatewayProjectsLocationsApisConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}