package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretsUpdateRequest {
    public SecretsSecretsUpdatePathParams pathParams;
    public SecretsSecretsUpdateRequest withPathParams(SecretsSecretsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableSecretInput request;
    public SecretsSecretsUpdateRequest withRequest(openapisdk.models.shared.WritableSecretInput request) {
        this.request = request;
        return this;
    }
}