package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersSetIamPolicyRequest {
    public CloudresourcemanagerFoldersSetIamPolicyPathParams pathParams;
    public CloudresourcemanagerFoldersSetIamPolicyRequest withPathParams(CloudresourcemanagerFoldersSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerFoldersSetIamPolicyQueryParams queryParams;
    public CloudresourcemanagerFoldersSetIamPolicyRequest withQueryParams(CloudresourcemanagerFoldersSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudresourcemanagerFoldersSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerFoldersSetIamPolicySecurity security;
    public CloudresourcemanagerFoldersSetIamPolicyRequest withSecurity(CloudresourcemanagerFoldersSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}