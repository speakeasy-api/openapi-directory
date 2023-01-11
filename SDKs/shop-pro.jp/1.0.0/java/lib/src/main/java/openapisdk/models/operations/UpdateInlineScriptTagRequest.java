package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInlineScriptTagRequest {
    public UpdateInlineScriptTagPathParams pathParams;
    public UpdateInlineScriptTagRequest withPathParams(UpdateInlineScriptTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateInlineScriptTagRequestBody request;
    public UpdateInlineScriptTagRequest withRequest(UpdateInlineScriptTagRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateInlineScriptTagSecurity security;
    public UpdateInlineScriptTagRequest withSecurity(UpdateInlineScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}