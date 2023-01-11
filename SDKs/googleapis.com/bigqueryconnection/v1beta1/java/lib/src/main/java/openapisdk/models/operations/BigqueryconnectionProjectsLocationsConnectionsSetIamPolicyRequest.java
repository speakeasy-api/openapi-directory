package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest {
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams pathParams;
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest withPathParams(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams queryParams;
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest withQueryParams(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity security;
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest withSecurity(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}