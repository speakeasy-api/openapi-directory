package openapisdk.models.operations;



public class ListCredentialRequest {
    public String serverURL;
    public ListCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCredentialQueryParams queryParams;
    public ListCredentialRequest withQueryParams(ListCredentialQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCredentialSecurity security;
    public ListCredentialRequest withSecurity(ListCredentialSecurity security) {
        this.security = security;
        return this;
    }
}