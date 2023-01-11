package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserDefinedMessageCreateUserDefinedMessageRequest {
    @SpeakeasyMetadata("form:name=Content")
    public String content;
    public CreateUserDefinedMessageCreateUserDefinedMessageRequest withContent(String content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdempotencyKey")
    public String idempotencyKey;
    public CreateUserDefinedMessageCreateUserDefinedMessageRequest withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
}