package openapisdk.models.operations;



public class GenderRequest {
    public GenderPathParams pathParams;
    public GenderRequest withPathParams(GenderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenderSecurity security;
    public GenderRequest withSecurity(GenderSecurity security) {
        this.security = security;
        return this;
    }
}