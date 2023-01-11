package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateConversationRequestBody request;
    public CreateConversationRequest withRequest(CreateConversationRequestBody request) {
        this.request = request;
        return this;
    }
}