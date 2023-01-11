package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsSetOrgPolicyRequest {
    public CloudresourcemanagerProjectsSetOrgPolicyPathParams pathParams;
    public CloudresourcemanagerProjectsSetOrgPolicyRequest withPathParams(CloudresourcemanagerProjectsSetOrgPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsSetOrgPolicyQueryParams queryParams;
    public CloudresourcemanagerProjectsSetOrgPolicyRequest withQueryParams(CloudresourcemanagerProjectsSetOrgPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetOrgPolicyRequest request;
    public CloudresourcemanagerProjectsSetOrgPolicyRequest withRequest(openapisdk.models.shared.SetOrgPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsSetOrgPolicySecurity security;
    public CloudresourcemanagerProjectsSetOrgPolicyRequest withSecurity(CloudresourcemanagerProjectsSetOrgPolicySecurity security) {
        this.security = security;
        return this;
    }
}