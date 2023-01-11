package openapisdk.models.operations;



public class ListFactorRequest {
    public String serverURL;
    public ListFactorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFactorPathParams pathParams;
    public ListFactorRequest withPathParams(ListFactorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFactorQueryParams queryParams;
    public ListFactorRequest withQueryParams(ListFactorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFactorSecurity security;
    public ListFactorRequest withSecurity(ListFactorSecurity security) {
        this.security = security;
        return this;
    }
}