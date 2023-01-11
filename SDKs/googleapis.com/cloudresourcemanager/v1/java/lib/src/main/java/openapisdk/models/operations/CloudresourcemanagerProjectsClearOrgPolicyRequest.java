package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsClearOrgPolicyRequest {
    public CloudresourcemanagerProjectsClearOrgPolicyPathParams pathParams;
    public CloudresourcemanagerProjectsClearOrgPolicyRequest withPathParams(CloudresourcemanagerProjectsClearOrgPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsClearOrgPolicyQueryParams queryParams;
    public CloudresourcemanagerProjectsClearOrgPolicyRequest withQueryParams(CloudresourcemanagerProjectsClearOrgPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClearOrgPolicyRequest request;
    public CloudresourcemanagerProjectsClearOrgPolicyRequest withRequest(openapisdk.models.shared.ClearOrgPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsClearOrgPolicySecurity security;
    public CloudresourcemanagerProjectsClearOrgPolicyRequest withSecurity(CloudresourcemanagerProjectsClearOrgPolicySecurity security) {
        this.security = security;
        return this;
    }
}