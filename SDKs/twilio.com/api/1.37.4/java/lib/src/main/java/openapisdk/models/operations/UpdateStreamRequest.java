package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamRequest {
    public String serverURL;
    public UpdateStreamRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateStreamPathParams pathParams;
    public UpdateStreamRequest withPathParams(UpdateStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateStreamUpdateStreamRequest request;
    public UpdateStreamRequest withRequest(UpdateStreamUpdateStreamRequest request) {
        this.request = request;
        return this;
    }
    public UpdateStreamSecurity security;
    public UpdateStreamRequest withSecurity(UpdateStreamSecurity security) {
        this.security = security;
        return this;
    }
}