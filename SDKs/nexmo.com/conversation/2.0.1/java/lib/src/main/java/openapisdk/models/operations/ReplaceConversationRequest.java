package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceConversationRequest {
    public ReplaceConversationPathParams pathParams;
    public ReplaceConversationRequest withPathParams(ReplaceConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReplaceConversationRequestBody request;
    public ReplaceConversationRequest withRequest(ReplaceConversationRequestBody request) {
        this.request = request;
        return this;
    }
}