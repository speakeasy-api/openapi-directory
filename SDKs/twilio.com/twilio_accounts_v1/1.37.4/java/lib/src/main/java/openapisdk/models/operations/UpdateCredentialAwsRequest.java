package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCredentialAwsRequest {
    public String serverURL;
    public UpdateCredentialAwsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateCredentialAwsPathParams pathParams;
    public UpdateCredentialAwsRequest withPathParams(UpdateCredentialAwsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCredentialAwsUpdateCredentialAwsRequest request;
    public UpdateCredentialAwsRequest withRequest(UpdateCredentialAwsUpdateCredentialAwsRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCredentialAwsSecurity security;
    public UpdateCredentialAwsRequest withSecurity(UpdateCredentialAwsSecurity security) {
        this.security = security;
        return this;
    }
}