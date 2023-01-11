package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConferenceRecordingUpdateConferenceRecordingRequest {
    @SpeakeasyMetadata("form:name=PauseBehavior")
    public String pauseBehavior;
    public UpdateConferenceRecordingUpdateConferenceRecordingRequest withPauseBehavior(String pauseBehavior) {
        this.pauseBehavior = pauseBehavior;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.ConferenceRecordingEnumStatusEnum status;
    public UpdateConferenceRecordingUpdateConferenceRecordingRequest withStatus(openapisdk.models.shared.ConferenceRecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}