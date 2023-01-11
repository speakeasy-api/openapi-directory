package openapisdk.models.operations;



public class MakeUserProofreaderRequest {
    public MakeUserProofreaderPathParams pathParams;
    public MakeUserProofreaderRequest withPathParams(MakeUserProofreaderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MakeUserProofreaderSecurity security;
    public MakeUserProofreaderRequest withSecurity(MakeUserProofreaderSecurity security) {
        this.security = security;
        return this;
    }
}