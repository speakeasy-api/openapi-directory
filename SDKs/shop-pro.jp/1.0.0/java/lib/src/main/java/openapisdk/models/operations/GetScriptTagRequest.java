package openapisdk.models.operations;



public class GetScriptTagRequest {
    public GetScriptTagPathParams pathParams;
    public GetScriptTagRequest withPathParams(GetScriptTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScriptTagSecurity security;
    public GetScriptTagRequest withSecurity(GetScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}