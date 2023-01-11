package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsSetIamPolicyRequest {
    public SecretmanagerProjectsSecretsSetIamPolicyPathParams pathParams;
    public SecretmanagerProjectsSecretsSetIamPolicyRequest withPathParams(SecretmanagerProjectsSecretsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsSetIamPolicyQueryParams queryParams;
    public SecretmanagerProjectsSecretsSetIamPolicyRequest withQueryParams(SecretmanagerProjectsSecretsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public SecretmanagerProjectsSecretsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public SecretmanagerProjectsSecretsSetIamPolicySecurity security;
    public SecretmanagerProjectsSecretsSetIamPolicyRequest withSecurity(SecretmanagerProjectsSecretsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}