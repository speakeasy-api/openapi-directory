package openapisdk.models.operations;



public class ListPoliciesRequest {
    public String serverURL;
    public ListPoliciesRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListPoliciesQueryParams queryParams;
    public ListPoliciesRequest withQueryParams(ListPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPoliciesSecurity security;
    public ListPoliciesRequest withSecurity(ListPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}