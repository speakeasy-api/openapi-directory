package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest {
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams pathParams;
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest withPathParams(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams queryParams;
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest withQueryParams(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity security;
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest withSecurity(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}