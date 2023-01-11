package openapisdk.models.operations;



public class GetInlineScriptTagRequest {
    public GetInlineScriptTagPathParams pathParams;
    public GetInlineScriptTagRequest withPathParams(GetInlineScriptTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInlineScriptTagSecurity security;
    public GetInlineScriptTagRequest withSecurity(GetInlineScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}