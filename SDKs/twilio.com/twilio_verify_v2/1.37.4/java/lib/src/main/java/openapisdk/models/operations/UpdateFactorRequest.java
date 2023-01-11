package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFactorRequest {
    public String serverURL;
    public UpdateFactorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateFactorPathParams pathParams;
    public UpdateFactorRequest withPathParams(UpdateFactorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateFactorUpdateFactorRequest request;
    public UpdateFactorRequest withRequest(UpdateFactorUpdateFactorRequest request) {
        this.request = request;
        return this;
    }
    public UpdateFactorSecurity security;
    public UpdateFactorRequest withSecurity(UpdateFactorSecurity security) {
        this.security = security;
        return this;
    }
}