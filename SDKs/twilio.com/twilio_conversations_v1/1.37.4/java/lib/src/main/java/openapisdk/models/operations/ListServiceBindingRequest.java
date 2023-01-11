package openapisdk.models.operations;



public class ListServiceBindingRequest {
    public String serverURL;
    public ListServiceBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceBindingPathParams pathParams;
    public ListServiceBindingRequest withPathParams(ListServiceBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceBindingQueryParams queryParams;
    public ListServiceBindingRequest withQueryParams(ListServiceBindingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceBindingSecurity security;
    public ListServiceBindingRequest withSecurity(ListServiceBindingSecurity security) {
        this.security = security;
        return this;
    }
}