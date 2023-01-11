package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretRolesUpdateRequest {
    public SecretsSecretRolesUpdatePathParams pathParams;
    public SecretsSecretRolesUpdateRequest withPathParams(SecretsSecretRolesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SecretRoleInput request;
    public SecretsSecretRolesUpdateRequest withRequest(openapisdk.models.shared.SecretRoleInput request) {
        this.request = request;
        return this;
    }
}