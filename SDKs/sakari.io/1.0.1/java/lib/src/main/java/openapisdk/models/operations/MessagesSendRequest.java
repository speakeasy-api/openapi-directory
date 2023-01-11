package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesSendRequest {
    public MessagesSendPathParams pathParams;
    public MessagesSendRequest withPathParams(MessagesSendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendMessagesRequest request;
    public MessagesSendRequest withRequest(openapisdk.models.shared.SendMessagesRequest request) {
        this.request = request;
        return this;
    }
    public MessagesSendSecurity security;
    public MessagesSendRequest withSecurity(MessagesSendSecurity security) {
        this.security = security;
        return this;
    }
}