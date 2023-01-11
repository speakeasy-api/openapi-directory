package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShortCodeRequest {
    public String serverURL;
    public UpdateShortCodeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateShortCodePathParams pathParams;
    public UpdateShortCodeRequest withPathParams(UpdateShortCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateShortCodeUpdateShortCodeRequest request;
    public UpdateShortCodeRequest withRequest(UpdateShortCodeUpdateShortCodeRequest request) {
        this.request = request;
        return this;
    }
    public UpdateShortCodeSecurity security;
    public UpdateShortCodeRequest withSecurity(UpdateShortCodeSecurity security) {
        this.security = security;
        return this;
    }
}