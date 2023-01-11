package openapisdk.models.operations;



public class FetchSubscriptionRequest {
    public String serverURL;
    public FetchSubscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSubscriptionPathParams pathParams;
    public FetchSubscriptionRequest withPathParams(FetchSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSubscriptionSecurity security;
    public FetchSubscriptionRequest withSecurity(FetchSubscriptionSecurity security) {
        this.security = security;
        return this;
    }
}