package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesSetIamPolicyRequest {
    public CloudresourcemanagerTagValuesSetIamPolicyPathParams pathParams;
    public CloudresourcemanagerTagValuesSetIamPolicyRequest withPathParams(CloudresourcemanagerTagValuesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerTagValuesSetIamPolicyQueryParams queryParams;
    public CloudresourcemanagerTagValuesSetIamPolicyRequest withQueryParams(CloudresourcemanagerTagValuesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudresourcemanagerTagValuesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerTagValuesSetIamPolicySecurity security;
    public CloudresourcemanagerTagValuesSetIamPolicyRequest withSecurity(CloudresourcemanagerTagValuesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}