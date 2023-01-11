package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompileScriptRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Script request;
    public CompileScriptRequest withRequest(openapisdk.models.shared.Script request) {
        this.request = request;
        return this;
    }
    public CompileScriptSecurity security;
    public CompileScriptRequest withSecurity(CompileScriptSecurity security) {
        this.security = security;
        return this;
    }
}