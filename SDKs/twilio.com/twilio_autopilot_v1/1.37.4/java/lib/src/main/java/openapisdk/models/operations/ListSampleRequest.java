package openapisdk.models.operations;



public class ListSampleRequest {
    public String serverURL;
    public ListSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSamplePathParams pathParams;
    public ListSampleRequest withPathParams(ListSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSampleQueryParams queryParams;
    public ListSampleRequest withQueryParams(ListSampleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSampleSecurity security;
    public ListSampleRequest withSecurity(ListSampleSecurity security) {
        this.security = security;
        return this;
    }
}