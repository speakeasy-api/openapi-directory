package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessageUpdateMessageRequest {
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public UpdateMessageUpdateMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.MessageEnumUpdateStatusEnum status;
    public UpdateMessageUpdateMessageRequest withStatus(openapisdk.models.shared.MessageEnumUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
}