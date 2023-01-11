package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShortCodeRequest {
    public String serverURL;
    public CreateShortCodeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateShortCodePathParams pathParams;
    public CreateShortCodeRequest withPathParams(CreateShortCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateShortCodeCreateShortCodeRequest request;
    public CreateShortCodeRequest withRequest(CreateShortCodeCreateShortCodeRequest request) {
        this.request = request;
        return this;
    }
    public CreateShortCodeSecurity security;
    public CreateShortCodeRequest withSecurity(CreateShortCodeSecurity security) {
        this.security = security;
        return this;
    }
}