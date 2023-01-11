package openapisdk.models.operations;



public class ListApplicationRequest {
    public String serverURL;
    public ListApplicationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListApplicationPathParams pathParams;
    public ListApplicationRequest withPathParams(ListApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListApplicationQueryParams queryParams;
    public ListApplicationRequest withQueryParams(ListApplicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListApplicationSecurity security;
    public ListApplicationRequest withSecurity(ListApplicationSecurity security) {
        this.security = security;
        return this;
    }
}