package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsGetOrgPolicyRequest {
    public CloudresourcemanagerProjectsGetOrgPolicyPathParams pathParams;
    public CloudresourcemanagerProjectsGetOrgPolicyRequest withPathParams(CloudresourcemanagerProjectsGetOrgPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsGetOrgPolicyQueryParams queryParams;
    public CloudresourcemanagerProjectsGetOrgPolicyRequest withQueryParams(CloudresourcemanagerProjectsGetOrgPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOrgPolicyRequest request;
    public CloudresourcemanagerProjectsGetOrgPolicyRequest withRequest(openapisdk.models.shared.GetOrgPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsGetOrgPolicySecurity security;
    public CloudresourcemanagerProjectsGetOrgPolicyRequest withSecurity(CloudresourcemanagerProjectsGetOrgPolicySecurity security) {
        this.security = security;
        return this;
    }
}