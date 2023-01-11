package openapisdk.models.operations;



public class ListBuildRequest {
    public String serverURL;
    public ListBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListBuildPathParams pathParams;
    public ListBuildRequest withPathParams(ListBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBuildQueryParams queryParams;
    public ListBuildRequest withQueryParams(ListBuildQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBuildSecurity security;
    public ListBuildRequest withSecurity(ListBuildSecurity security) {
        this.security = security;
        return this;
    }
}