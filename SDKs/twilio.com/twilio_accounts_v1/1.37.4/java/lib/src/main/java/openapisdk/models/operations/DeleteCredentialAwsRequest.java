package openapisdk.models.operations;



public class DeleteCredentialAwsRequest {
    public String serverURL;
    public DeleteCredentialAwsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCredentialAwsPathParams pathParams;
    public DeleteCredentialAwsRequest withPathParams(DeleteCredentialAwsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCredentialAwsSecurity security;
    public DeleteCredentialAwsRequest withSecurity(DeleteCredentialAwsSecurity security) {
        this.security = security;
        return this;
    }
}