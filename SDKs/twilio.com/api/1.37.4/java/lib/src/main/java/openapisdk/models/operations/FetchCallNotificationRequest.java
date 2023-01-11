package openapisdk.models.operations;



public class FetchCallNotificationRequest {
    public String serverURL;
    public FetchCallNotificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCallNotificationPathParams pathParams;
    public FetchCallNotificationRequest withPathParams(FetchCallNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCallNotificationSecurity security;
    public FetchCallNotificationRequest withSecurity(FetchCallNotificationSecurity security) {
        this.security = security;
        return this;
    }
}