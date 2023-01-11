package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest {
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams pathParams;
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest withPathParams(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest withQueryParams(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity security;
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest withSecurity(CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}