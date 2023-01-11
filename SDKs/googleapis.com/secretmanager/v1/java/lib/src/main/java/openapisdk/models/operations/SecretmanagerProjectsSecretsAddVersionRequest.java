package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsAddVersionRequest {
    public SecretmanagerProjectsSecretsAddVersionPathParams pathParams;
    public SecretmanagerProjectsSecretsAddVersionRequest withPathParams(SecretmanagerProjectsSecretsAddVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsAddVersionQueryParams queryParams;
    public SecretmanagerProjectsSecretsAddVersionRequest withQueryParams(SecretmanagerProjectsSecretsAddVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddSecretVersionRequest request;
    public SecretmanagerProjectsSecretsAddVersionRequest withRequest(openapisdk.models.shared.AddSecretVersionRequest request) {
        this.request = request;
        return this;
    }
    public SecretmanagerProjectsSecretsAddVersionSecurity security;
    public SecretmanagerProjectsSecretsAddVersionRequest withSecurity(SecretmanagerProjectsSecretsAddVersionSecurity security) {
        this.security = security;
        return this;
    }
}