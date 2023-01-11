package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkAccessProfileRequest {
    public String serverURL;
    public CreateNetworkAccessProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateNetworkAccessProfileCreateNetworkAccessProfileRequest request;
    public CreateNetworkAccessProfileRequest withRequest(CreateNetworkAccessProfileCreateNetworkAccessProfileRequest request) {
        this.request = request;
        return this;
    }
    public CreateNetworkAccessProfileSecurity security;
    public CreateNetworkAccessProfileRequest withSecurity(CreateNetworkAccessProfileSecurity security) {
        this.security = security;
        return this;
    }
}