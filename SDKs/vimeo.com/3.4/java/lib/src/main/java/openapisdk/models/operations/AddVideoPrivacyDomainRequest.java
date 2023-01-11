package openapisdk.models.operations;



public class AddVideoPrivacyDomainRequest {
    public AddVideoPrivacyDomainPathParams pathParams;
    public AddVideoPrivacyDomainRequest withPathParams(AddVideoPrivacyDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoPrivacyDomainSecurity security;
    public AddVideoPrivacyDomainRequest withSecurity(AddVideoPrivacyDomainSecurity security) {
        this.security = security;
        return this;
    }
}