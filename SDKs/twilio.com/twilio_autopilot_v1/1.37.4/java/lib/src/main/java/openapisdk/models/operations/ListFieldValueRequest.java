package openapisdk.models.operations;



public class ListFieldValueRequest {
    public String serverURL;
    public ListFieldValueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFieldValuePathParams pathParams;
    public ListFieldValueRequest withPathParams(ListFieldValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFieldValueQueryParams queryParams;
    public ListFieldValueRequest withQueryParams(ListFieldValueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFieldValueSecurity security;
    public ListFieldValueRequest withSecurity(ListFieldValueSecurity security) {
        this.security = security;
        return this;
    }
}