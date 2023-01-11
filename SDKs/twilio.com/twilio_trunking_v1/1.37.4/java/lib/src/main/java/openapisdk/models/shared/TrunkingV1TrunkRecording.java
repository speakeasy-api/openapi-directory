package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TrunkingV1TrunkRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public RecordingEnumRecordingModeEnum mode;
    public TrunkingV1TrunkRecording withMode(RecordingEnumRecordingModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public RecordingEnumRecordingTrimEnum trim;
    public TrunkingV1TrunkRecording withTrim(RecordingEnumRecordingTrimEnum trim) {
        this.trim = trim;
        return this;
    }
}