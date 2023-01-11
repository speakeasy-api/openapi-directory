package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateCallRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateCallSecurity security;
    public CreateCallRequest withSecurity(CreateCallSecurity security) {
        this.security = security;
        return this;
    }
}