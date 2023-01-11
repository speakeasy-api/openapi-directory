package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsGetIamPolicyRequest {
    public SecretmanagerProjectsSecretsGetIamPolicyPathParams pathParams;
    public SecretmanagerProjectsSecretsGetIamPolicyRequest withPathParams(SecretmanagerProjectsSecretsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsGetIamPolicyQueryParams queryParams;
    public SecretmanagerProjectsSecretsGetIamPolicyRequest withQueryParams(SecretmanagerProjectsSecretsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecretmanagerProjectsSecretsGetIamPolicySecurity security;
    public SecretmanagerProjectsSecretsGetIamPolicyRequest withSecurity(SecretmanagerProjectsSecretsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}