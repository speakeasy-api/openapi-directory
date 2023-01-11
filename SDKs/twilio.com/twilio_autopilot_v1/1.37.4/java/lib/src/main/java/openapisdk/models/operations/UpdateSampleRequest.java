package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSampleRequest {
    public String serverURL;
    public UpdateSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSamplePathParams pathParams;
    public UpdateSampleRequest withPathParams(UpdateSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSampleUpdateSampleRequest request;
    public UpdateSampleRequest withRequest(UpdateSampleUpdateSampleRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSampleSecurity security;
    public UpdateSampleRequest withSecurity(UpdateSampleSecurity security) {
        this.security = security;
        return this;
    }
}