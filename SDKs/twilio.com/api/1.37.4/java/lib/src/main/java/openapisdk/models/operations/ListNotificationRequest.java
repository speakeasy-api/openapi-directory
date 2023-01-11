package openapisdk.models.operations;



public class ListNotificationRequest {
    public String serverURL;
    public ListNotificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListNotificationPathParams pathParams;
    public ListNotificationRequest withPathParams(ListNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListNotificationQueryParams queryParams;
    public ListNotificationRequest withQueryParams(ListNotificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNotificationSecurity security;
    public ListNotificationRequest withSecurity(ListNotificationSecurity security) {
        this.security = security;
        return this;
    }
}