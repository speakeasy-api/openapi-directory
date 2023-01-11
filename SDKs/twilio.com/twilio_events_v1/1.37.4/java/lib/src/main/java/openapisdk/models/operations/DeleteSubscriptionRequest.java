package openapisdk.models.operations;



public class DeleteSubscriptionRequest {
    public String serverURL;
    public DeleteSubscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSubscriptionPathParams pathParams;
    public DeleteSubscriptionRequest withPathParams(DeleteSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSubscriptionSecurity security;
    public DeleteSubscriptionRequest withSecurity(DeleteSubscriptionSecurity security) {
        this.security = security;
        return this;
    }
}