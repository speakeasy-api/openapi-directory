package openapisdk.models.operations;



public class CreateCustomLogoRequest {
    public CreateCustomLogoPathParams pathParams;
    public CreateCustomLogoRequest withPathParams(CreateCustomLogoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateCustomLogoSecurity security;
    public CreateCustomLogoRequest withSecurity(CreateCustomLogoSecurity security) {
        this.security = security;
        return this;
    }
}