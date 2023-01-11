package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsCreateRequest {
    public SecretmanagerProjectsSecretsCreatePathParams pathParams;
    public SecretmanagerProjectsSecretsCreateRequest withPathParams(SecretmanagerProjectsSecretsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsCreateQueryParams queryParams;
    public SecretmanagerProjectsSecretsCreateRequest withQueryParams(SecretmanagerProjectsSecretsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SecretInput request;
    public SecretmanagerProjectsSecretsCreateRequest withRequest(openapisdk.models.shared.SecretInput request) {
        this.request = request;
        return this;
    }
    public SecretmanagerProjectsSecretsCreateSecurity security;
    public SecretmanagerProjectsSecretsCreateRequest withSecurity(SecretmanagerProjectsSecretsCreateSecurity security) {
        this.security = security;
        return this;
    }
}