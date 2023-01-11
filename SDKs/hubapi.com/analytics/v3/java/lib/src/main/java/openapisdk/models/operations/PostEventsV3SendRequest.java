package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEventsV3SendRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BehavioralEventHttpCompletionRequest request;
    public PostEventsV3SendRequest withRequest(openapisdk.models.shared.BehavioralEventHttpCompletionRequest request) {
        this.request = request;
        return this;
    }
    public PostEventsV3SendSecurity security;
    public PostEventsV3SendRequest withSecurity(PostEventsV3SendSecurity security) {
        this.security = security;
        return this;
    }
}