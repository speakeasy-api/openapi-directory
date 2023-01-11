package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScriptRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Script request;
    public CreateScriptRequest withRequest(openapisdk.models.shared.Script request) {
        this.request = request;
        return this;
    }
    public CreateScriptSecurity security;
    public CreateScriptRequest withSecurity(CreateScriptSecurity security) {
        this.security = security;
        return this;
    }
}