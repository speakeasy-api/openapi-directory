package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest {
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams pathParams;
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest withPathParams(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest withQueryParams(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity security;
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest withSecurity(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}