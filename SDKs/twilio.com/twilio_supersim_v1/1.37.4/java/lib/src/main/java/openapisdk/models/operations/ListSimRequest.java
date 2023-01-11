package openapisdk.models.operations;



public class ListSimRequest {
    public String serverURL;
    public ListSimRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSimQueryParams queryParams;
    public ListSimRequest withQueryParams(ListSimQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSimSecurity security;
    public ListSimRequest withSecurity(ListSimSecurity security) {
        this.security = security;
        return this;
    }
}