package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableSecretInput request;
    public SecretsSecretsCreateRequest withRequest(openapisdk.models.shared.WritableSecretInput request) {
        this.request = request;
        return this;
    }
}