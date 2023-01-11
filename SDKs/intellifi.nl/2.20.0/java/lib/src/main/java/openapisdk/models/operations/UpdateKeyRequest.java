package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKeyRequest {
    public UpdateKeyPathParams pathParams;
    public UpdateKeyRequest withPathParams(UpdateKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.KeyInput request;
    public UpdateKeyRequest withRequest(openapisdk.models.shared.KeyInput request) {
        this.request = request;
        return this;
    }
    public UpdateKeySecurity security;
    public UpdateKeyRequest withSecurity(UpdateKeySecurity security) {
        this.security = security;
        return this;
    }
}