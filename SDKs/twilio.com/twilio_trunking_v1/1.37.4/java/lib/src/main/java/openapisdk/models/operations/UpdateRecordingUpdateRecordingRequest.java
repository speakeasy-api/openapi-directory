package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRecordingUpdateRecordingRequest {
    @SpeakeasyMetadata("form:name=Mode")
    public openapisdk.models.shared.RecordingEnumRecordingModeEnum mode;
    public UpdateRecordingUpdateRecordingRequest withMode(openapisdk.models.shared.RecordingEnumRecordingModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @SpeakeasyMetadata("form:name=Trim")
    public openapisdk.models.shared.RecordingEnumRecordingTrimEnum trim;
    public UpdateRecordingUpdateRecordingRequest withTrim(openapisdk.models.shared.RecordingEnumRecordingTrimEnum trim) {
        this.trim = trim;
        return this;
    }
}