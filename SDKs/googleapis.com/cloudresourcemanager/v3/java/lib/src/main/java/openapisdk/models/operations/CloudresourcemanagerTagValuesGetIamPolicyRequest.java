package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesGetIamPolicyRequest {
    public CloudresourcemanagerTagValuesGetIamPolicyPathParams pathParams;
    public CloudresourcemanagerTagValuesGetIamPolicyRequest withPathParams(CloudresourcemanagerTagValuesGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerTagValuesGetIamPolicyQueryParams queryParams;
    public CloudresourcemanagerTagValuesGetIamPolicyRequest withQueryParams(CloudresourcemanagerTagValuesGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public CloudresourcemanagerTagValuesGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerTagValuesGetIamPolicySecurity security;
    public CloudresourcemanagerTagValuesGetIamPolicyRequest withSecurity(CloudresourcemanagerTagValuesGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}