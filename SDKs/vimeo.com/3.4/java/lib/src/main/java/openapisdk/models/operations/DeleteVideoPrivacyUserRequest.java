package openapisdk.models.operations;



public class DeleteVideoPrivacyUserRequest {
    public DeleteVideoPrivacyUserPathParams pathParams;
    public DeleteVideoPrivacyUserRequest withPathParams(DeleteVideoPrivacyUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoPrivacyUserSecurity security;
    public DeleteVideoPrivacyUserRequest withSecurity(DeleteVideoPrivacyUserSecurity security) {
        this.security = security;
        return this;
    }
}