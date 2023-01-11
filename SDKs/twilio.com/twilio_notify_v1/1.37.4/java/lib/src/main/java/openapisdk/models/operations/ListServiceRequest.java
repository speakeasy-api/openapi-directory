package openapisdk.models.operations;



public class ListServiceRequest {
    public String serverURL;
    public ListServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceQueryParams queryParams;
    public ListServiceRequest withQueryParams(ListServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceSecurity security;
    public ListServiceRequest withSecurity(ListServiceSecurity security) {
        this.security = security;
        return this;
    }
}