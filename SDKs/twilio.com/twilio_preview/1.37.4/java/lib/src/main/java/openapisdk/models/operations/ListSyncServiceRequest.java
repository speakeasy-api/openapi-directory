package openapisdk.models.operations;



public class ListSyncServiceRequest {
    public String serverURL;
    public ListSyncServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncServiceQueryParams queryParams;
    public ListSyncServiceRequest withQueryParams(ListSyncServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncServiceSecurity security;
    public ListSyncServiceRequest withSecurity(ListSyncServiceSecurity security) {
        this.security = security;
        return this;
    }
}