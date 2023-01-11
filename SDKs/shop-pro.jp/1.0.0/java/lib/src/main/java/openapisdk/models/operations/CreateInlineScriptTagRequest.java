package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInlineScriptTagRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateInlineScriptTagRequestBody request;
    public CreateInlineScriptTagRequest withRequest(CreateInlineScriptTagRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateInlineScriptTagSecurity security;
    public CreateInlineScriptTagRequest withSecurity(CreateInlineScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}