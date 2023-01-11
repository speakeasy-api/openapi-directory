package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialAwsRequest {
    public String serverURL;
    public CreateCredentialAwsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCredentialAwsCreateCredentialAwsRequest request;
    public CreateCredentialAwsRequest withRequest(CreateCredentialAwsCreateCredentialAwsRequest request) {
        this.request = request;
        return this;
    }
    public CreateCredentialAwsSecurity security;
    public CreateCredentialAwsRequest withSecurity(CreateCredentialAwsSecurity security) {
        this.security = security;
        return this;
    }
}