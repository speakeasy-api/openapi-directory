package openapisdk.models.operations;



public class ListFieldRequest {
    public String serverURL;
    public ListFieldRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFieldPathParams pathParams;
    public ListFieldRequest withPathParams(ListFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFieldQueryParams queryParams;
    public ListFieldRequest withQueryParams(ListFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFieldSecurity security;
    public ListFieldRequest withSecurity(ListFieldSecurity security) {
        this.security = security;
        return this;
    }
}