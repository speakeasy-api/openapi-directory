package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddClientSecretRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddClientSecret request;
    public AddClientSecretRequest withRequest(openapisdk.models.shared.AddClientSecret request) {
        this.request = request;
        return this;
    }
    public AddClientSecretSecurity security;
    public AddClientSecretRequest withSecurity(AddClientSecretSecurity security) {
        this.security = security;
        return this;
    }
}