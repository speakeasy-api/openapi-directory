package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsVersionsDestroyRequest {
    public SecretmanagerProjectsSecretsVersionsDestroyPathParams pathParams;
    public SecretmanagerProjectsSecretsVersionsDestroyRequest withPathParams(SecretmanagerProjectsSecretsVersionsDestroyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsDestroyQueryParams queryParams;
    public SecretmanagerProjectsSecretsVersionsDestroyRequest withQueryParams(SecretmanagerProjectsSecretsVersionsDestroyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public SecretmanagerProjectsSecretsVersionsDestroyRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsDestroySecurity security;
    public SecretmanagerProjectsSecretsVersionsDestroyRequest withSecurity(SecretmanagerProjectsSecretsVersionsDestroySecurity security) {
        this.security = security;
        return this;
    }
}