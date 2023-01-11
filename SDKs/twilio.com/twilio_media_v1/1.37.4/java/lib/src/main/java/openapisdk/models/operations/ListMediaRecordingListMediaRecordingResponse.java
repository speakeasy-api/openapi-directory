package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMediaRecordingListMediaRecordingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_recordings")
    public openapisdk.models.shared.MediaV1MediaRecording[] mediaRecordings;
    public ListMediaRecordingListMediaRecordingResponse withMediaRecordings(openapisdk.models.shared.MediaV1MediaRecording[] mediaRecordings) {
        this.mediaRecordings = mediaRecordings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMediaRecordingListMediaRecordingResponseMeta meta;
    public ListMediaRecordingListMediaRecordingResponse withMeta(ListMediaRecordingListMediaRecordingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}