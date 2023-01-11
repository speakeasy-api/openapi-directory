package openapisdk.models.operations;



public class ListByocTrunkRequest {
    public String serverURL;
    public ListByocTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListByocTrunkQueryParams queryParams;
    public ListByocTrunkRequest withQueryParams(ListByocTrunkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListByocTrunkSecurity security;
    public ListByocTrunkRequest withSecurity(ListByocTrunkSecurity security) {
        this.security = security;
        return this;
    }
}