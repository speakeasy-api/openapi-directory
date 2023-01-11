package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsSecretsPartialUpdateRequest {
    public SecretsSecretsPartialUpdatePathParams pathParams;
    public SecretsSecretsPartialUpdateRequest withPathParams(SecretsSecretsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableSecretInput request;
    public SecretsSecretsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableSecretInput request) {
        this.request = request;
        return this;
    }
}