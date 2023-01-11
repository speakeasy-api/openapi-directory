package openapisdk.models.operations;



public class ListFaxRequest {
    public String serverURL;
    public ListFaxRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFaxQueryParams queryParams;
    public ListFaxRequest withQueryParams(ListFaxQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFaxSecurity security;
    public ListFaxRequest withSecurity(ListFaxSecurity security) {
        this.security = security;
        return this;
    }
}