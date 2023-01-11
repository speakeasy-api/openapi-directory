package openapisdk.models.operations;



public class ListCredentialAwsRequest {
    public String serverURL;
    public ListCredentialAwsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCredentialAwsQueryParams queryParams;
    public ListCredentialAwsRequest withQueryParams(ListCredentialAwsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCredentialAwsSecurity security;
    public ListCredentialAwsRequest withSecurity(ListCredentialAwsSecurity security) {
        this.security = security;
        return this;
    }
}