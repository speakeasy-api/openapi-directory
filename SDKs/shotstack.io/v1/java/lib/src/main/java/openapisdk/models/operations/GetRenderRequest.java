package openapisdk.models.operations;



public class GetRenderRequest {
    public GetRenderPathParams pathParams;
    public GetRenderRequest withPathParams(GetRenderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRenderSecurity security;
    public GetRenderRequest withSecurity(GetRenderSecurity security) {
        this.security = security;
        return this;
    }
}