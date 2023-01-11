package openapisdk.models.operations;



public class ListKeyRequest {
    public String serverURL;
    public ListKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListKeyPathParams pathParams;
    public ListKeyRequest withPathParams(ListKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListKeyQueryParams queryParams;
    public ListKeyRequest withQueryParams(ListKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListKeySecurity security;
    public ListKeyRequest withSecurity(ListKeySecurity security) {
        this.security = security;
        return this;
    }
}