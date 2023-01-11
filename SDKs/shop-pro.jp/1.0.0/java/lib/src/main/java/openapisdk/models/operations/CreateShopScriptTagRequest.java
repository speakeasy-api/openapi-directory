package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShopScriptTagRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateShopScriptTagRequestBody request;
    public CreateShopScriptTagRequest withRequest(CreateShopScriptTagRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateShopScriptTagSecurity security;
    public CreateShopScriptTagRequest withSecurity(CreateShopScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}