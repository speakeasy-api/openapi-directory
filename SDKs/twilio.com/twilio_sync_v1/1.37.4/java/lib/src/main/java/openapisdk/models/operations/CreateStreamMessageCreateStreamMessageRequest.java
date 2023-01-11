package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamMessageCreateStreamMessageRequest {
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public CreateStreamMessageCreateStreamMessageRequest withData(Object data) {
        this.data = data;
        return this;
    }
}