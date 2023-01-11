package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingsCapabilityWebhooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_changed")
    public MeetingsCapabilityWebhooksRecordingChanged recordingChanged;
    public MeetingsCapabilityWebhooks withRecordingChanged(MeetingsCapabilityWebhooksRecordingChanged recordingChanged) {
        this.recordingChanged = recordingChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_changed")
    public MeetingsCapabilityWebhooksRoomChanged roomChanged;
    public MeetingsCapabilityWebhooks withRoomChanged(MeetingsCapabilityWebhooksRoomChanged roomChanged) {
        this.roomChanged = roomChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_changed")
    public MeetingsCapabilityWebhooksSessionChanged sessionChanged;
    public MeetingsCapabilityWebhooks withSessionChanged(MeetingsCapabilityWebhooksSessionChanged sessionChanged) {
        this.sessionChanged = sessionChanged;
        return this;
    }
}