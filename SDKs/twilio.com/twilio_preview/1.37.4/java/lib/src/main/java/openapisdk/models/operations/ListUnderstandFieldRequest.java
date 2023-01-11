package openapisdk.models.operations;



public class ListUnderstandFieldRequest {
    public String serverURL;
    public ListUnderstandFieldRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUnderstandFieldPathParams pathParams;
    public ListUnderstandFieldRequest withPathParams(ListUnderstandFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUnderstandFieldQueryParams queryParams;
    public ListUnderstandFieldRequest withQueryParams(ListUnderstandFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUnderstandFieldSecurity security;
    public ListUnderstandFieldRequest withSecurity(ListUnderstandFieldSecurity security) {
        this.security = security;
        return this;
    }
}