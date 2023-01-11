package openapisdk.models.operations;



public class ListTrustProductRequest {
    public String serverURL;
    public ListTrustProductRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTrustProductQueryParams queryParams;
    public ListTrustProductRequest withQueryParams(ListTrustProductQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTrustProductSecurity security;
    public ListTrustProductRequest withSecurity(ListTrustProductSecurity security) {
        this.security = security;
        return this;
    }
}