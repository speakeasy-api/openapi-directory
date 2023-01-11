package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest {
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams pathParams;
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest withPathParams(CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams queryParams;
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest withQueryParams(CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEffectiveOrgPolicyRequest request;
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest withRequest(openapisdk.models.shared.GetEffectiveOrgPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity security;
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest withSecurity(CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity security) {
        this.security = security;
        return this;
    }
}