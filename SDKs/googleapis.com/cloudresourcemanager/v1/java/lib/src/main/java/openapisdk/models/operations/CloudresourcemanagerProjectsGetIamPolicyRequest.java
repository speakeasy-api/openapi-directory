package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsGetIamPolicyRequest {
    public CloudresourcemanagerProjectsGetIamPolicyPathParams pathParams;
    public CloudresourcemanagerProjectsGetIamPolicyRequest withPathParams(CloudresourcemanagerProjectsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsGetIamPolicyQueryParams queryParams;
    public CloudresourcemanagerProjectsGetIamPolicyRequest withQueryParams(CloudresourcemanagerProjectsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public CloudresourcemanagerProjectsGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsGetIamPolicySecurity security;
    public CloudresourcemanagerProjectsGetIamPolicyRequest withSecurity(CloudresourcemanagerProjectsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}