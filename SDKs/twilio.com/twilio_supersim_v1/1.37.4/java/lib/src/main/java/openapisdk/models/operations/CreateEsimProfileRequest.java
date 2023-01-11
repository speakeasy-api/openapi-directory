package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEsimProfileRequest {
    public String serverURL;
    public CreateEsimProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateEsimProfileCreateEsimProfileRequest request;
    public CreateEsimProfileRequest withRequest(CreateEsimProfileCreateEsimProfileRequest request) {
        this.request = request;
        return this;
    }
    public CreateEsimProfileSecurity security;
    public CreateEsimProfileRequest withSecurity(CreateEsimProfileSecurity security) {
        this.security = security;
        return this;
    }
}