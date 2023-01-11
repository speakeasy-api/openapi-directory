package openapisdk.models.operations;



public class ListEntityRequest {
    public String serverURL;
    public ListEntityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEntityPathParams pathParams;
    public ListEntityRequest withPathParams(ListEntityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListEntityQueryParams queryParams;
    public ListEntityRequest withQueryParams(ListEntityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEntitySecurity security;
    public ListEntityRequest withSecurity(ListEntitySecurity security) {
        this.security = security;
        return this;
    }
}