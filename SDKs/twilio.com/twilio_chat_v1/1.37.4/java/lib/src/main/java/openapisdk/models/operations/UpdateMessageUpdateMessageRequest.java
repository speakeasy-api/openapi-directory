package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessageUpdateMessageRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateMessageUpdateMessageRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public UpdateMessageUpdateMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
}