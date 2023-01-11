package openapisdk.models.operations;



public class FetchNotificationRequest {
    public String serverURL;
    public FetchNotificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchNotificationPathParams pathParams;
    public FetchNotificationRequest withPathParams(FetchNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchNotificationSecurity security;
    public FetchNotificationRequest withSecurity(FetchNotificationSecurity security) {
        this.security = security;
        return this;
    }
}