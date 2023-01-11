package openapisdk.models.operations;



public class ListEndUserTypeRequest {
    public String serverURL;
    public ListEndUserTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEndUserTypeQueryParams queryParams;
    public ListEndUserTypeRequest withQueryParams(ListEndUserTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEndUserTypeSecurity security;
    public ListEndUserTypeRequest withSecurity(ListEndUserTypeSecurity security) {
        this.security = security;
        return this;
    }
}