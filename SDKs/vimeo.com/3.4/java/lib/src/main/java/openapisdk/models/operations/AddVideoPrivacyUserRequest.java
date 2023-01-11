package openapisdk.models.operations;



public class AddVideoPrivacyUserRequest {
    public AddVideoPrivacyUserPathParams pathParams;
    public AddVideoPrivacyUserRequest withPathParams(AddVideoPrivacyUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoPrivacyUserSecurity security;
    public AddVideoPrivacyUserRequest withSecurity(AddVideoPrivacyUserSecurity security) {
        this.security = security;
        return this;
    }
}