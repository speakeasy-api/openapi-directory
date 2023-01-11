package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest {
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams pathParams;
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest withPathParams(PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams queryParams;
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest withQueryParams(PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity security;
    public PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest withSecurity(PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}