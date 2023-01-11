package openapisdk.models.operations;



public class DeleteUserDefinedMessageSubscriptionRequest {
    public String serverURL;
    public DeleteUserDefinedMessageSubscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUserDefinedMessageSubscriptionPathParams pathParams;
    public DeleteUserDefinedMessageSubscriptionRequest withPathParams(DeleteUserDefinedMessageSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUserDefinedMessageSubscriptionSecurity security;
    public DeleteUserDefinedMessageSubscriptionRequest withSecurity(DeleteUserDefinedMessageSubscriptionSecurity security) {
        this.security = security;
        return this;
    }
}