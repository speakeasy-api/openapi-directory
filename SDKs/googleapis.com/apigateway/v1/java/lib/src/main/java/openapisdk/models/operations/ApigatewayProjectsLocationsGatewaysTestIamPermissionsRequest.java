package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest {
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsPathParams pathParams;
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest withPathParams(ApigatewayProjectsLocationsGatewaysTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsQueryParams queryParams;
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest withQueryParams(ApigatewayProjectsLocationsGatewaysTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApigatewayTestIamPermissionsRequest request;
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest withRequest(openapisdk.models.shared.ApigatewayTestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity security;
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest withSecurity(ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}