package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRoomRecordingListRoomRecordingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRoomRecordingListRoomRecordingResponseMeta meta;
    public ListRoomRecordingListRoomRecordingResponse withMeta(ListRoomRecordingListRoomRecordingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordings")
    public openapisdk.models.shared.VideoV1RoomRoomRecording[] recordings;
    public ListRoomRecordingListRoomRecordingResponse withRecordings(openapisdk.models.shared.VideoV1RoomRoomRecording[] recordings) {
        this.recordings = recordings;
        return this;
    }
}