package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScriptRequest {
    public UpdateScriptPathParams pathParams;
    public UpdateScriptRequest withPathParams(UpdateScriptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Script request;
    public UpdateScriptRequest withRequest(openapisdk.models.shared.Script request) {
        this.request = request;
        return this;
    }
    public UpdateScriptSecurity security;
    public UpdateScriptRequest withSecurity(UpdateScriptSecurity security) {
        this.security = security;
        return this;
    }
}