package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipCredentialListRequest {
    public String serverURL;
    public UpdateSipCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSipCredentialListPathParams pathParams;
    public UpdateSipCredentialListRequest withPathParams(UpdateSipCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSipCredentialListUpdateSipCredentialListRequest request;
    public UpdateSipCredentialListRequest withRequest(UpdateSipCredentialListUpdateSipCredentialListRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSipCredentialListSecurity security;
    public UpdateSipCredentialListRequest withSecurity(UpdateSipCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}