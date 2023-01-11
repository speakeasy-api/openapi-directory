package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandSampleRequest {
    public String serverURL;
    public UpdateUnderstandSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandSamplePathParams pathParams;
    public UpdateUnderstandSampleRequest withPathParams(UpdateUnderstandSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandSampleUpdateUnderstandSampleRequest request;
    public UpdateUnderstandSampleRequest withRequest(UpdateUnderstandSampleUpdateUnderstandSampleRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandSampleSecurity security;
    public UpdateUnderstandSampleRequest withSecurity(UpdateUnderstandSampleSecurity security) {
        this.security = security;
        return this;
    }
}