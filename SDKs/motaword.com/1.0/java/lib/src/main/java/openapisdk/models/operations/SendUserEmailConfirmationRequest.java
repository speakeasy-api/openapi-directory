package openapisdk.models.operations;



public class SendUserEmailConfirmationRequest {
    public SendUserEmailConfirmationPathParams pathParams;
    public SendUserEmailConfirmationRequest withPathParams(SendUserEmailConfirmationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SendUserEmailConfirmationSecurity security;
    public SendUserEmailConfirmationRequest withSecurity(SendUserEmailConfirmationSecurity security) {
        this.security = security;
        return this;
    }
}