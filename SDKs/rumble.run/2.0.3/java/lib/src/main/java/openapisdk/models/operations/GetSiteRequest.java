package openapisdk.models.operations;



public class GetSiteRequest {
    public GetSitePathParams pathParams;
    public GetSiteRequest withPathParams(GetSitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSiteSecurity security;
    public GetSiteRequest withSecurity(GetSiteSecurity security) {
        this.security = security;
        return this;
    }
}