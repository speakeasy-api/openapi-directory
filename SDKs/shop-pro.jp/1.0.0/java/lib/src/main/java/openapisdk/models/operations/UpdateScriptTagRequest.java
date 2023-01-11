package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScriptTagRequest {
    public UpdateScriptTagPathParams pathParams;
    public UpdateScriptTagRequest withPathParams(UpdateScriptTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateScriptTagRequestBody request;
    public UpdateScriptTagRequest withRequest(UpdateScriptTagRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateScriptTagSecurity security;
    public UpdateScriptTagRequest withSecurity(UpdateScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}