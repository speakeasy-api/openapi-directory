package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOriginationUrlRequest {
    public String serverURL;
    public UpdateOriginationUrlRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateOriginationUrlPathParams pathParams;
    public UpdateOriginationUrlRequest withPathParams(UpdateOriginationUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateOriginationUrlUpdateOriginationUrlRequest request;
    public UpdateOriginationUrlRequest withRequest(UpdateOriginationUrlUpdateOriginationUrlRequest request) {
        this.request = request;
        return this;
    }
    public UpdateOriginationUrlSecurity security;
    public UpdateOriginationUrlRequest withSecurity(UpdateOriginationUrlSecurity security) {
        this.security = security;
        return this;
    }
}