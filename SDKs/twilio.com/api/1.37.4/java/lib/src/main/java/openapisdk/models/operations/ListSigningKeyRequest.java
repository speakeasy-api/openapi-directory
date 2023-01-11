package openapisdk.models.operations;



public class ListSigningKeyRequest {
    public String serverURL;
    public ListSigningKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSigningKeyPathParams pathParams;
    public ListSigningKeyRequest withPathParams(ListSigningKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSigningKeyQueryParams queryParams;
    public ListSigningKeyRequest withQueryParams(ListSigningKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSigningKeySecurity security;
    public ListSigningKeyRequest withSecurity(ListSigningKeySecurity security) {
        this.security = security;
        return this;
    }
}