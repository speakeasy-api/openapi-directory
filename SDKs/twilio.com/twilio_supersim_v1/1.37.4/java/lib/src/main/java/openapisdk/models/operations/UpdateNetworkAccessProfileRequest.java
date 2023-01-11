package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkAccessProfileRequest {
    public String serverURL;
    public UpdateNetworkAccessProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateNetworkAccessProfilePathParams pathParams;
    public UpdateNetworkAccessProfileRequest withPathParams(UpdateNetworkAccessProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest request;
    public UpdateNetworkAccessProfileRequest withRequest(UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest request) {
        this.request = request;
        return this;
    }
    public UpdateNetworkAccessProfileSecurity security;
    public UpdateNetworkAccessProfileRequest withSecurity(UpdateNetworkAccessProfileSecurity security) {
        this.security = security;
        return this;
    }
}