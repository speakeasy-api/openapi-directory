package openapisdk.models.operations;



public class ListConnectionPolicyTargetRequest {
    public String serverURL;
    public ListConnectionPolicyTargetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConnectionPolicyTargetPathParams pathParams;
    public ListConnectionPolicyTargetRequest withPathParams(ListConnectionPolicyTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConnectionPolicyTargetQueryParams queryParams;
    public ListConnectionPolicyTargetRequest withQueryParams(ListConnectionPolicyTargetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConnectionPolicyTargetSecurity security;
    public ListConnectionPolicyTargetRequest withSecurity(ListConnectionPolicyTargetSecurity security) {
        this.security = security;
        return this;
    }
}