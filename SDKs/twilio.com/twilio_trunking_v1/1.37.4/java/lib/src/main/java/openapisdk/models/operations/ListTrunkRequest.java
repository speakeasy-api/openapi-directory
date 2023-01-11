package openapisdk.models.operations;



public class ListTrunkRequest {
    public String serverURL;
    public ListTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTrunkQueryParams queryParams;
    public ListTrunkRequest withQueryParams(ListTrunkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTrunkSecurity security;
    public ListTrunkRequest withSecurity(ListTrunkSecurity security) {
        this.security = security;
        return this;
    }
}