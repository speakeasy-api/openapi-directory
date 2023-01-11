package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretRolesPartialUpdateRequest {
    public SecretsSecretRolesPartialUpdatePathParams pathParams;
    public SecretsSecretRolesPartialUpdateRequest withPathParams(SecretsSecretRolesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SecretRoleInput request;
    public SecretsSecretRolesPartialUpdateRequest withRequest(openapisdk.models.shared.SecretRoleInput request) {
        this.request = request;
        return this;
    }
}