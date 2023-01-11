package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretRolesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SecretRoleInput request;
    public SecretsSecretRolesCreateRequest withRequest(openapisdk.models.shared.SecretRoleInput request) {
        this.request = request;
        return this;
    }
}