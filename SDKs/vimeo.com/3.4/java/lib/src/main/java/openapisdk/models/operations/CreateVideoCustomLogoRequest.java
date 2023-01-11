package openapisdk.models.operations;



public class CreateVideoCustomLogoRequest {
    public CreateVideoCustomLogoPathParams pathParams;
    public CreateVideoCustomLogoRequest withPathParams(CreateVideoCustomLogoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateVideoCustomLogoSecurity security;
    public CreateVideoCustomLogoRequest withSecurity(CreateVideoCustomLogoSecurity security) {
        this.security = security;
        return this;
    }
}