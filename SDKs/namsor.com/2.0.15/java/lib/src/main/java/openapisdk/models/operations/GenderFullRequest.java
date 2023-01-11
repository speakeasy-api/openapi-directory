package openapisdk.models.operations;



public class GenderFullRequest {
    public GenderFullPathParams pathParams;
    public GenderFullRequest withPathParams(GenderFullPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenderFullSecurity security;
    public GenderFullRequest withSecurity(GenderFullSecurity security) {
        this.security = security;
        return this;
    }
}