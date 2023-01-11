package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKeyRequest {
    public String serverURL;
    public UpdateKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateKeyPathParams pathParams;
    public UpdateKeyRequest withPathParams(UpdateKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateKeyUpdateKeyRequest request;
    public UpdateKeyRequest withRequest(UpdateKeyUpdateKeyRequest request) {
        this.request = request;
        return this;
    }
    public UpdateKeySecurity security;
    public UpdateKeyRequest withSecurity(UpdateKeySecurity security) {
        this.security = security;
        return this;
    }
}