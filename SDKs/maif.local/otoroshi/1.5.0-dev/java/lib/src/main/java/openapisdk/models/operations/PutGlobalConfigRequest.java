package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutGlobalConfigRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GlobalConfig request;
    public PutGlobalConfigRequest withRequest(openapisdk.models.shared.GlobalConfig request) {
        this.request = request;
        return this;
    }
    public PutGlobalConfigSecurity security;
    public PutGlobalConfigRequest withSecurity(PutGlobalConfigSecurity security) {
        this.security = security;
        return this;
    }
}