package openapisdk.models.operations;



public class DeleteMessengerAccountRequest {
    public DeleteMessengerAccountPathParams pathParams;
    public DeleteMessengerAccountRequest withPathParams(DeleteMessengerAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMessengerAccountSecurity security;
    public DeleteMessengerAccountRequest withSecurity(DeleteMessengerAccountSecurity security) {
        this.security = security;
        return this;
    }
}