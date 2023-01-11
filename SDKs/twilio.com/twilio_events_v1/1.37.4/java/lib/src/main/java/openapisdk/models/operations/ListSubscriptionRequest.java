package openapisdk.models.operations;



public class ListSubscriptionRequest {
    public String serverURL;
    public ListSubscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSubscriptionQueryParams queryParams;
    public ListSubscriptionRequest withQueryParams(ListSubscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSubscriptionSecurity security;
    public ListSubscriptionRequest withSecurity(ListSubscriptionSecurity security) {
        this.security = security;
        return this;
    }
}