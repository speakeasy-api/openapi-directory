package openapisdk.models.operations;



public class ListFieldTypeRequest {
    public String serverURL;
    public ListFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFieldTypePathParams pathParams;
    public ListFieldTypeRequest withPathParams(ListFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFieldTypeQueryParams queryParams;
    public ListFieldTypeRequest withQueryParams(ListFieldTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFieldTypeSecurity security;
    public ListFieldTypeRequest withSecurity(ListFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}