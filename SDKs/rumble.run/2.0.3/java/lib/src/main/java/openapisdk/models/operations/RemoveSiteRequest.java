package openapisdk.models.operations;



public class RemoveSiteRequest {
    public RemoveSitePathParams pathParams;
    public RemoveSiteRequest withPathParams(RemoveSitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveSiteSecurity security;
    public RemoveSiteRequest withSecurity(RemoveSiteSecurity security) {
        this.security = security;
        return this;
    }
}