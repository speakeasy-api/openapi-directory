package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest {
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams pathParams;
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest withPathParams(ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams queryParams;
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest withQueryParams(ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApigatewaySetIamPolicyRequest request;
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest withRequest(openapisdk.models.shared.ApigatewaySetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity security;
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest withSecurity(ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}