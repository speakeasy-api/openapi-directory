package openapisdk.models.operations;



public class ListShortCodeRequest {
    public String serverURL;
    public ListShortCodeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListShortCodePathParams pathParams;
    public ListShortCodeRequest withPathParams(ListShortCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListShortCodeQueryParams queryParams;
    public ListShortCodeRequest withQueryParams(ListShortCodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListShortCodeSecurity security;
    public ListShortCodeRequest withSecurity(ListShortCodeSecurity security) {
        this.security = security;
        return this;
    }
}