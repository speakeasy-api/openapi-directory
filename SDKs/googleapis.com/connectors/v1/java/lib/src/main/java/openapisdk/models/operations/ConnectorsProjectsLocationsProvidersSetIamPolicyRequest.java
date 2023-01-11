package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsProvidersSetIamPolicyRequest {
    public ConnectorsProjectsLocationsProvidersSetIamPolicyPathParams pathParams;
    public ConnectorsProjectsLocationsProvidersSetIamPolicyRequest withPathParams(ConnectorsProjectsLocationsProvidersSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsProvidersSetIamPolicyQueryParams queryParams;
    public ConnectorsProjectsLocationsProvidersSetIamPolicyRequest withQueryParams(ConnectorsProjectsLocationsProvidersSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public ConnectorsProjectsLocationsProvidersSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsProvidersSetIamPolicySecurity security;
    public ConnectorsProjectsLocationsProvidersSetIamPolicyRequest withSecurity(ConnectorsProjectsLocationsProvidersSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}