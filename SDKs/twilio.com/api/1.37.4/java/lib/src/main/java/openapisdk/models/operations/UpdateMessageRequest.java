package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessageRequest {
    public String serverURL;
    public UpdateMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateMessagePathParams pathParams;
    public UpdateMessageRequest withPathParams(UpdateMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateMessageUpdateMessageRequest request;
    public UpdateMessageRequest withRequest(UpdateMessageUpdateMessageRequest request) {
        this.request = request;
        return this;
    }
    public UpdateMessageSecurity security;
    public UpdateMessageRequest withSecurity(UpdateMessageSecurity security) {
        this.security = security;
        return this;
    }
}