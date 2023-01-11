package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAlphaSenderRequest {
    public String serverURL;
    public CreateAlphaSenderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateAlphaSenderPathParams pathParams;
    public CreateAlphaSenderRequest withPathParams(CreateAlphaSenderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateAlphaSenderCreateAlphaSenderRequest request;
    public CreateAlphaSenderRequest withRequest(CreateAlphaSenderCreateAlphaSenderRequest request) {
        this.request = request;
        return this;
    }
    public CreateAlphaSenderSecurity security;
    public CreateAlphaSenderRequest withSecurity(CreateAlphaSenderSecurity security) {
        this.security = security;
        return this;
    }
}