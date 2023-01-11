package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCredentialRequest {
    public String serverURL;
    public UpdateCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateCredentialPathParams pathParams;
    public UpdateCredentialRequest withPathParams(UpdateCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCredentialUpdateCredentialRequest request;
    public UpdateCredentialRequest withRequest(UpdateCredentialUpdateCredentialRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCredentialSecurity security;
    public UpdateCredentialRequest withSecurity(UpdateCredentialSecurity security) {
        this.security = security;
        return this;
    }
}