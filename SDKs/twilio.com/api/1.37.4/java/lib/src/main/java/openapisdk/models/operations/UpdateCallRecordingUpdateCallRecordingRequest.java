package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallRecordingUpdateCallRecordingRequest {
    @SpeakeasyMetadata("form:name=PauseBehavior")
    public String pauseBehavior;
    public UpdateCallRecordingUpdateCallRecordingRequest withPauseBehavior(String pauseBehavior) {
        this.pauseBehavior = pauseBehavior;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.CallRecordingEnumStatusEnum status;
    public UpdateCallRecordingUpdateCallRecordingRequest withStatus(openapisdk.models.shared.CallRecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}