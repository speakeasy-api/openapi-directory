package openapisdk.models.operations;



public class FetchServiceNotificationRequest {
    public String serverURL;
    public FetchServiceNotificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceNotificationPathParams pathParams;
    public FetchServiceNotificationRequest withPathParams(FetchServiceNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceNotificationSecurity security;
    public FetchServiceNotificationRequest withSecurity(FetchServiceNotificationSecurity security) {
        this.security = security;
        return this;
    }
}