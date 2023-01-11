package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsVersionsDisableRequest {
    public SecretmanagerProjectsSecretsVersionsDisablePathParams pathParams;
    public SecretmanagerProjectsSecretsVersionsDisableRequest withPathParams(SecretmanagerProjectsSecretsVersionsDisablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsDisableQueryParams queryParams;
    public SecretmanagerProjectsSecretsVersionsDisableRequest withQueryParams(SecretmanagerProjectsSecretsVersionsDisableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public SecretmanagerProjectsSecretsVersionsDisableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsDisableSecurity security;
    public SecretmanagerProjectsSecretsVersionsDisableRequest withSecurity(SecretmanagerProjectsSecretsVersionsDisableSecurity security) {
        this.security = security;
        return this;
    }
}