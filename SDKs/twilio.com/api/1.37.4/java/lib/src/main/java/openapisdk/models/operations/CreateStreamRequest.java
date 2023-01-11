package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamRequest {
    public String serverURL;
    public CreateStreamRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateStreamPathParams pathParams;
    public CreateStreamRequest withPathParams(CreateStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateStreamCreateStreamRequest request;
    public CreateStreamRequest withRequest(CreateStreamCreateStreamRequest request) {
        this.request = request;
        return this;
    }
    public CreateStreamSecurity security;
    public CreateStreamRequest withSecurity(CreateStreamSecurity security) {
        this.security = security;
        return this;
    }
}