package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalAuthModuleRequest {
    public UpdateGlobalAuthModulePathParams pathParams;
    public UpdateGlobalAuthModuleRequest withPathParams(UpdateGlobalAuthModulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateGlobalAuthModuleRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdateGlobalAuthModuleSecurity security;
    public UpdateGlobalAuthModuleRequest withSecurity(UpdateGlobalAuthModuleSecurity security) {
        this.security = security;
        return this;
    }
}