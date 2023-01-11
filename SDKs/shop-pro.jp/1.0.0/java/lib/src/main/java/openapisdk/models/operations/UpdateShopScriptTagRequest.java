package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShopScriptTagRequest {
    public UpdateShopScriptTagPathParams pathParams;
    public UpdateShopScriptTagRequest withPathParams(UpdateShopScriptTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateShopScriptTagRequestBody request;
    public UpdateShopScriptTagRequest withRequest(UpdateShopScriptTagRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateShopScriptTagSecurity security;
    public UpdateShopScriptTagRequest withSecurity(UpdateShopScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}