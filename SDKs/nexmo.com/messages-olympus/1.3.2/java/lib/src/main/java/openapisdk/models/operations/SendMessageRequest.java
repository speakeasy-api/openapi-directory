package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendMessageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public SendMessageRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public SendMessageSecurity security;
    public SendMessageRequest withSecurity(SendMessageSecurity security) {
        this.security = security;
        return this;
    }
}