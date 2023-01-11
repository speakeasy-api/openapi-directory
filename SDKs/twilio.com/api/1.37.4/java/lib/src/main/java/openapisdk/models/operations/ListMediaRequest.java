package openapisdk.models.operations;



public class ListMediaRequest {
    public String serverURL;
    public ListMediaRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMediaPathParams pathParams;
    public ListMediaRequest withPathParams(ListMediaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMediaQueryParams queryParams;
    public ListMediaRequest withQueryParams(ListMediaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMediaSecurity security;
    public ListMediaRequest withSecurity(ListMediaSecurity security) {
        this.security = security;
        return this;
    }
}