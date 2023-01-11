package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOriginationUrlRequest {
    public String serverURL;
    public CreateOriginationUrlRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateOriginationUrlPathParams pathParams;
    public CreateOriginationUrlRequest withPathParams(CreateOriginationUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateOriginationUrlCreateOriginationUrlRequest request;
    public CreateOriginationUrlRequest withRequest(CreateOriginationUrlCreateOriginationUrlRequest request) {
        this.request = request;
        return this;
    }
    public CreateOriginationUrlSecurity security;
    public CreateOriginationUrlRequest withSecurity(CreateOriginationUrlSecurity security) {
        this.security = security;
        return this;
    }
}