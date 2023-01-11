package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerSetIamPolicyRequest {
    public ServicebrokerSetIamPolicyPathParams pathParams;
    public ServicebrokerSetIamPolicyRequest withPathParams(ServicebrokerSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerSetIamPolicyQueryParams queryParams;
    public ServicebrokerSetIamPolicyRequest withQueryParams(ServicebrokerSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request;
    public ServicebrokerSetIamPolicyRequest withRequest(openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ServicebrokerSetIamPolicySecurity security;
    public ServicebrokerSetIamPolicyRequest withSecurity(ServicebrokerSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}