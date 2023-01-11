package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGlobalAuthModuleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateGlobalAuthModuleRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateGlobalAuthModuleSecurity security;
    public CreateGlobalAuthModuleRequest withSecurity(CreateGlobalAuthModuleSecurity security) {
        this.security = security;
        return this;
    }
}