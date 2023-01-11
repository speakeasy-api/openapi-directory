package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageInteractionCreateMessageInteractionRequest {
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public CreateMessageInteractionCreateMessageInteractionRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=MediaUrl")
    public String[] mediaUrl;
    public CreateMessageInteractionCreateMessageInteractionRequest withMediaUrl(String[] mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
}