package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageCreateMessageRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateMessageCreateMessageRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public CreateMessageCreateMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public CreateMessageCreateMessageRequest withFrom(String from) {
        this.from = from;
        return this;
    }
}