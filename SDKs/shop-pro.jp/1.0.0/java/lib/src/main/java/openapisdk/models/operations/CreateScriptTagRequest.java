package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScriptTagRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateScriptTagRequestBody request;
    public CreateScriptTagRequest withRequest(CreateScriptTagRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateScriptTagSecurity security;
    public CreateScriptTagRequest withSecurity(CreateScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}