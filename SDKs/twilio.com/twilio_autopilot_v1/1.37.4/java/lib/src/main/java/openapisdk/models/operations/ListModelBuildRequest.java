package openapisdk.models.operations;



public class ListModelBuildRequest {
    public String serverURL;
    public ListModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListModelBuildPathParams pathParams;
    public ListModelBuildRequest withPathParams(ListModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListModelBuildQueryParams queryParams;
    public ListModelBuildRequest withQueryParams(ListModelBuildQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListModelBuildSecurity security;
    public ListModelBuildRequest withSecurity(ListModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}