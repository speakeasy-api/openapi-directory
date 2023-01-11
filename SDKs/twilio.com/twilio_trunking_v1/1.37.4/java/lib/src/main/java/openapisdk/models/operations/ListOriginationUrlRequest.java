package openapisdk.models.operations;



public class ListOriginationUrlRequest {
    public String serverURL;
    public ListOriginationUrlRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListOriginationUrlPathParams pathParams;
    public ListOriginationUrlRequest withPathParams(ListOriginationUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListOriginationUrlQueryParams queryParams;
    public ListOriginationUrlRequest withQueryParams(ListOriginationUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOriginationUrlSecurity security;
    public ListOriginationUrlRequest withSecurity(ListOriginationUrlSecurity security) {
        this.security = security;
        return this;
    }
}