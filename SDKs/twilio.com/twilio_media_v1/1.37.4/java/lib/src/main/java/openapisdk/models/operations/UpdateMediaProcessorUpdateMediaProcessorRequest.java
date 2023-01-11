package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMediaProcessorUpdateMediaProcessorRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.MediaProcessorEnumUpdateStatusEnum status;
    public UpdateMediaProcessorUpdateMediaProcessorRequest withStatus(openapisdk.models.shared.MediaProcessorEnumUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
}