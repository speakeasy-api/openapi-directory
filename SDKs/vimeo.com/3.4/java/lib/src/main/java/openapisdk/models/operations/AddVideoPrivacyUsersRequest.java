package openapisdk.models.operations;



public class AddVideoPrivacyUsersRequest {
    public AddVideoPrivacyUsersPathParams pathParams;
    public AddVideoPrivacyUsersRequest withPathParams(AddVideoPrivacyUsersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoPrivacyUsersSecurity security;
    public AddVideoPrivacyUsersRequest withSecurity(AddVideoPrivacyUsersSecurity security) {
        this.security = security;
        return this;
    }
}