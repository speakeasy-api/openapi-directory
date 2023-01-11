package openapisdk.models.operations;



public class ListAlertRequest {
    public String serverURL;
    public ListAlertRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAlertQueryParams queryParams;
    public ListAlertRequest withQueryParams(ListAlertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAlertSecurity security;
    public ListAlertRequest withSecurity(ListAlertSecurity security) {
        this.security = security;
        return this;
    }
}