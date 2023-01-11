package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsSetIamPolicyRequest {
    public CloudresourcemanagerProjectsSetIamPolicyPathParams pathParams;
    public CloudresourcemanagerProjectsSetIamPolicyRequest withPathParams(CloudresourcemanagerProjectsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsSetIamPolicyQueryParams queryParams;
    public CloudresourcemanagerProjectsSetIamPolicyRequest withQueryParams(CloudresourcemanagerProjectsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudresourcemanagerProjectsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsSetIamPolicySecurity security;
    public CloudresourcemanagerProjectsSetIamPolicyRequest withSecurity(CloudresourcemanagerProjectsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}