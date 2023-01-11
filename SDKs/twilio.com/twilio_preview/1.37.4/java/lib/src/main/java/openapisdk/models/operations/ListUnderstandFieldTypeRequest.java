package openapisdk.models.operations;



public class ListUnderstandFieldTypeRequest {
    public String serverURL;
    public ListUnderstandFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUnderstandFieldTypePathParams pathParams;
    public ListUnderstandFieldTypeRequest withPathParams(ListUnderstandFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUnderstandFieldTypeQueryParams queryParams;
    public ListUnderstandFieldTypeRequest withQueryParams(ListUnderstandFieldTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUnderstandFieldTypeSecurity security;
    public ListUnderstandFieldTypeRequest withSecurity(ListUnderstandFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}