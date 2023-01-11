package openapisdk.models.operations;



public class DetailSystemRequest {
    public DetailSystemPathParams pathParams;
    public DetailSystemRequest withPathParams(DetailSystemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DetailSystemSecurity security;
    public DetailSystemRequest withSecurity(DetailSystemSecurity security) {
        this.security = security;
        return this;
    }
}