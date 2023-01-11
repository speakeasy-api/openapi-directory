package openapisdk.models.operations;



public class ListUnderstandSampleRequest {
    public String serverURL;
    public ListUnderstandSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUnderstandSamplePathParams pathParams;
    public ListUnderstandSampleRequest withPathParams(ListUnderstandSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUnderstandSampleQueryParams queryParams;
    public ListUnderstandSampleRequest withQueryParams(ListUnderstandSampleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUnderstandSampleSecurity security;
    public ListUnderstandSampleRequest withSecurity(ListUnderstandSampleSecurity security) {
        this.security = security;
        return this;
    }
}