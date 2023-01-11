package openapisdk.models.operations;



public class ListEndUserRequest {
    public String serverURL;
    public ListEndUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEndUserQueryParams queryParams;
    public ListEndUserRequest withQueryParams(ListEndUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEndUserSecurity security;
    public ListEndUserRequest withSecurity(ListEndUserSecurity security) {
        this.security = security;
        return this;
    }
}