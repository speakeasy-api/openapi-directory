package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandSampleRequest {
    public String serverURL;
    public CreateUnderstandSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUnderstandSamplePathParams pathParams;
    public CreateUnderstandSampleRequest withPathParams(CreateUnderstandSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUnderstandSampleCreateUnderstandSampleRequest request;
    public CreateUnderstandSampleRequest withRequest(CreateUnderstandSampleCreateUnderstandSampleRequest request) {
        this.request = request;
        return this;
    }
    public CreateUnderstandSampleSecurity security;
    public CreateUnderstandSampleRequest withSecurity(CreateUnderstandSampleSecurity security) {
        this.security = security;
        return this;
    }
}