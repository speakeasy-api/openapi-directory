package openapisdk.models.operations;



public class ListCallNotificationRequest {
    public String serverURL;
    public ListCallNotificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCallNotificationPathParams pathParams;
    public ListCallNotificationRequest withPathParams(ListCallNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCallNotificationQueryParams queryParams;
    public ListCallNotificationRequest withQueryParams(ListCallNotificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCallNotificationSecurity security;
    public ListCallNotificationRequest withSecurity(ListCallNotificationSecurity security) {
        this.security = security;
        return this;
    }
}