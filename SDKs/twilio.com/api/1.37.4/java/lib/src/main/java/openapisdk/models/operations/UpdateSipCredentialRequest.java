package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipCredentialRequest {
    public String serverURL;
    public UpdateSipCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSipCredentialPathParams pathParams;
    public UpdateSipCredentialRequest withPathParams(UpdateSipCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSipCredentialUpdateSipCredentialRequest request;
    public UpdateSipCredentialRequest withRequest(UpdateSipCredentialUpdateSipCredentialRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSipCredentialSecurity security;
    public UpdateSipCredentialRequest withSecurity(UpdateSipCredentialSecurity security) {
        this.security = security;
        return this;
    }
}