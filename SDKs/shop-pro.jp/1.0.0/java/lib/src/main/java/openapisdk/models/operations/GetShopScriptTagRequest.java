package openapisdk.models.operations;



public class GetShopScriptTagRequest {
    public GetShopScriptTagPathParams pathParams;
    public GetShopScriptTagRequest withPathParams(GetShopScriptTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetShopScriptTagSecurity security;
    public GetShopScriptTagRequest withSecurity(GetShopScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}