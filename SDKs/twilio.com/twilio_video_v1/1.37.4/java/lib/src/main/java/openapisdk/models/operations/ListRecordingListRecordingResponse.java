package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRecordingListRecordingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRecordingListRecordingResponseMeta meta;
    public ListRecordingListRecordingResponse withMeta(ListRecordingListRecordingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordings")
    public openapisdk.models.shared.VideoV1Recording[] recordings;
    public ListRecordingListRecordingResponse withRecordings(openapisdk.models.shared.VideoV1Recording[] recordings) {
        this.recordings = recordings;
        return this;
    }
}