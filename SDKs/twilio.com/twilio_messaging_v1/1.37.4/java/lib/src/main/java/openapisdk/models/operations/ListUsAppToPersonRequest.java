package openapisdk.models.operations;



public class ListUsAppToPersonRequest {
    public String serverURL;
    public ListUsAppToPersonRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsAppToPersonPathParams pathParams;
    public ListUsAppToPersonRequest withPathParams(ListUsAppToPersonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsAppToPersonQueryParams queryParams;
    public ListUsAppToPersonRequest withQueryParams(ListUsAppToPersonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsAppToPersonSecurity security;
    public ListUsAppToPersonRequest withSecurity(ListUsAppToPersonSecurity security) {
        this.security = security;
        return this;
    }
}