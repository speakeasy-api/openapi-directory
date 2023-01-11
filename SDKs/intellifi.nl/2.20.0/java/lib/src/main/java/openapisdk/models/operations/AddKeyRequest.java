package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddKeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.KeyInput request;
    public AddKeyRequest withRequest(openapisdk.models.shared.KeyInput request) {
        this.request = request;
        return this;
    }
    public AddKeySecurity security;
    public AddKeyRequest withSecurity(AddKeySecurity security) {
        this.security = security;
        return this;
    }
}