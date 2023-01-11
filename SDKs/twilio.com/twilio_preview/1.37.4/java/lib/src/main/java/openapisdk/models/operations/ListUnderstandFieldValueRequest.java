package openapisdk.models.operations;



public class ListUnderstandFieldValueRequest {
    public String serverURL;
    public ListUnderstandFieldValueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUnderstandFieldValuePathParams pathParams;
    public ListUnderstandFieldValueRequest withPathParams(ListUnderstandFieldValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUnderstandFieldValueQueryParams queryParams;
    public ListUnderstandFieldValueRequest withQueryParams(ListUnderstandFieldValueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUnderstandFieldValueSecurity security;
    public ListUnderstandFieldValueRequest withSecurity(ListUnderstandFieldValueSecurity security) {
        this.security = security;
        return this;
    }
}