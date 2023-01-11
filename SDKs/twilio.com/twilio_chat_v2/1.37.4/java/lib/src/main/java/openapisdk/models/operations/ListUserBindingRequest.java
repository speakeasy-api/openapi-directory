package openapisdk.models.operations;



public class ListUserBindingRequest {
    public String serverURL;
    public ListUserBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUserBindingPathParams pathParams;
    public ListUserBindingRequest withPathParams(ListUserBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUserBindingQueryParams queryParams;
    public ListUserBindingRequest withQueryParams(ListUserBindingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUserBindingSecurity security;
    public ListUserBindingRequest withSecurity(ListUserBindingSecurity security) {
        this.security = security;
        return this;
    }
}