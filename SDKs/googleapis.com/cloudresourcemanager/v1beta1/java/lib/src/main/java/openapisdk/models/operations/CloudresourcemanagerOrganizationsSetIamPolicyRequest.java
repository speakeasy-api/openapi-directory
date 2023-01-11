package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsSetIamPolicyRequest {
    public CloudresourcemanagerOrganizationsSetIamPolicyPathParams pathParams;
    public CloudresourcemanagerOrganizationsSetIamPolicyRequest withPathParams(CloudresourcemanagerOrganizationsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerOrganizationsSetIamPolicyQueryParams queryParams;
    public CloudresourcemanagerOrganizationsSetIamPolicyRequest withQueryParams(CloudresourcemanagerOrganizationsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudresourcemanagerOrganizationsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerOrganizationsSetIamPolicySecurity security;
    public CloudresourcemanagerOrganizationsSetIamPolicyRequest withSecurity(CloudresourcemanagerOrganizationsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}