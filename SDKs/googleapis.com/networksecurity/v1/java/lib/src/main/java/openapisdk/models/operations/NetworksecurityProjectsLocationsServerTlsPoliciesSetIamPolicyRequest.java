package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest {
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyPathParams pathParams;
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest withPathParams(NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyQueryParams queryParams;
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest withQueryParams(NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request;
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest withRequest(openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity security;
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest withSecurity(NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}