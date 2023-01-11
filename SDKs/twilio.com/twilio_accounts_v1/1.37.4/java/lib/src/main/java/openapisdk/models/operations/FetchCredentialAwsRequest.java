package openapisdk.models.operations;



public class FetchCredentialAwsRequest {
    public String serverURL;
    public FetchCredentialAwsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCredentialAwsPathParams pathParams;
    public FetchCredentialAwsRequest withPathParams(FetchCredentialAwsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCredentialAwsSecurity security;
    public FetchCredentialAwsRequest withSecurity(FetchCredentialAwsSecurity security) {
        this.security = security;
        return this;
    }
}