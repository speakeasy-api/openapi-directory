package openapisdk.models.operations;



public class ListAlphaSenderRequest {
    public String serverURL;
    public ListAlphaSenderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAlphaSenderPathParams pathParams;
    public ListAlphaSenderRequest withPathParams(ListAlphaSenderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAlphaSenderQueryParams queryParams;
    public ListAlphaSenderRequest withQueryParams(ListAlphaSenderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAlphaSenderSecurity security;
    public ListAlphaSenderRequest withSecurity(ListAlphaSenderSecurity security) {
        this.security = security;
        return this;
    }
}