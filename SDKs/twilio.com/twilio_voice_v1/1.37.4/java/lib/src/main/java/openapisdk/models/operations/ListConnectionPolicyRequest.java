package openapisdk.models.operations;



public class ListConnectionPolicyRequest {
    public String serverURL;
    public ListConnectionPolicyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConnectionPolicyQueryParams queryParams;
    public ListConnectionPolicyRequest withQueryParams(ListConnectionPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConnectionPolicySecurity security;
    public ListConnectionPolicyRequest withSecurity(ListConnectionPolicySecurity security) {
        this.security = security;
        return this;
    }
}