package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest {
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyPathParams pathParams;
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest withPathParams(NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyQueryParams queryParams;
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest withQueryParams(NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity security;
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest withSecurity(NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}