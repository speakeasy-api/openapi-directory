package openapisdk.models.operations;



public class ListUnderstandModelBuildRequest {
    public String serverURL;
    public ListUnderstandModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUnderstandModelBuildPathParams pathParams;
    public ListUnderstandModelBuildRequest withPathParams(ListUnderstandModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUnderstandModelBuildQueryParams queryParams;
    public ListUnderstandModelBuildRequest withQueryParams(ListUnderstandModelBuildQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUnderstandModelBuildSecurity security;
    public ListUnderstandModelBuildRequest withSecurity(ListUnderstandModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}