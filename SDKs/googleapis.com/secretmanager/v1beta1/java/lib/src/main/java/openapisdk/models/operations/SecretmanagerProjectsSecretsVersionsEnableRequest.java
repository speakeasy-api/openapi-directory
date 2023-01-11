package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsVersionsEnableRequest {
    public SecretmanagerProjectsSecretsVersionsEnablePathParams pathParams;
    public SecretmanagerProjectsSecretsVersionsEnableRequest withPathParams(SecretmanagerProjectsSecretsVersionsEnablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsEnableQueryParams queryParams;
    public SecretmanagerProjectsSecretsVersionsEnableRequest withQueryParams(SecretmanagerProjectsSecretsVersionsEnableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public SecretmanagerProjectsSecretsVersionsEnableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsEnableSecurity security;
    public SecretmanagerProjectsSecretsVersionsEnableRequest withSecurity(SecretmanagerProjectsSecretsVersionsEnableSecurity security) {
        this.security = security;
        return this;
    }
}