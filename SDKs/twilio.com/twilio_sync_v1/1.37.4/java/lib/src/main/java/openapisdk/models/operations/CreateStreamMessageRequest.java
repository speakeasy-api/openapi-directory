package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamMessageRequest {
    public String serverURL;
    public CreateStreamMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateStreamMessagePathParams pathParams;
    public CreateStreamMessageRequest withPathParams(CreateStreamMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateStreamMessageCreateStreamMessageRequest request;
    public CreateStreamMessageRequest withRequest(CreateStreamMessageCreateStreamMessageRequest request) {
        this.request = request;
        return this;
    }
    public CreateStreamMessageSecurity security;
    public CreateStreamMessageRequest withSecurity(CreateStreamMessageSecurity security) {
        this.security = security;
        return this;
    }
}