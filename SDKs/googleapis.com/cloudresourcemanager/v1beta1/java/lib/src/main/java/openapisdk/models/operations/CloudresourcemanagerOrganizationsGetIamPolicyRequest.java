package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsGetIamPolicyRequest {
    public CloudresourcemanagerOrganizationsGetIamPolicyPathParams pathParams;
    public CloudresourcemanagerOrganizationsGetIamPolicyRequest withPathParams(CloudresourcemanagerOrganizationsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerOrganizationsGetIamPolicyQueryParams queryParams;
    public CloudresourcemanagerOrganizationsGetIamPolicyRequest withQueryParams(CloudresourcemanagerOrganizationsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public CloudresourcemanagerOrganizationsGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerOrganizationsGetIamPolicySecurity security;
    public CloudresourcemanagerOrganizationsGetIamPolicyRequest withSecurity(CloudresourcemanagerOrganizationsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}