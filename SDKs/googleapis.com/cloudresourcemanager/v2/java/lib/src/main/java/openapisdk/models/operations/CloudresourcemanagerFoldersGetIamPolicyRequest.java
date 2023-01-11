package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersGetIamPolicyRequest {
    public CloudresourcemanagerFoldersGetIamPolicyPathParams pathParams;
    public CloudresourcemanagerFoldersGetIamPolicyRequest withPathParams(CloudresourcemanagerFoldersGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerFoldersGetIamPolicyQueryParams queryParams;
    public CloudresourcemanagerFoldersGetIamPolicyRequest withQueryParams(CloudresourcemanagerFoldersGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public CloudresourcemanagerFoldersGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerFoldersGetIamPolicySecurity security;
    public CloudresourcemanagerFoldersGetIamPolicyRequest withSecurity(CloudresourcemanagerFoldersGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}