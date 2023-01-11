package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsPatchRequest {
    public SecretmanagerProjectsSecretsPatchPathParams pathParams;
    public SecretmanagerProjectsSecretsPatchRequest withPathParams(SecretmanagerProjectsSecretsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsPatchQueryParams queryParams;
    public SecretmanagerProjectsSecretsPatchRequest withQueryParams(SecretmanagerProjectsSecretsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SecretInput request;
    public SecretmanagerProjectsSecretsPatchRequest withRequest(openapisdk.models.shared.SecretInput request) {
        this.request = request;
        return this;
    }
    public SecretmanagerProjectsSecretsPatchSecurity security;
    public SecretmanagerProjectsSecretsPatchRequest withSecurity(SecretmanagerProjectsSecretsPatchSecurity security) {
        this.security = security;
        return this;
    }
}