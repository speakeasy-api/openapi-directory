package openapisdk.models.operations;



public class ListContentRequest {
    public String serverURL;
    public ListContentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListContentQueryParams queryParams;
    public ListContentRequest withQueryParams(ListContentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListContentSecurity security;
    public ListContentRequest withSecurity(ListContentSecurity security) {
        this.security = security;
        return this;
    }
}