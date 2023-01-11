package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamUpdateStreamRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.StreamEnumUpdateStatusEnum status;
    public UpdateStreamUpdateStreamRequest withStatus(openapisdk.models.shared.StreamEnumUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
}