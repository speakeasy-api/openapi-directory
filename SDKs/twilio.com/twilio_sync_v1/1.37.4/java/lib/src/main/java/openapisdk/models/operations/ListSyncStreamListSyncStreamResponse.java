package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncStreamListSyncStreamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncStreamListSyncStreamResponseMeta meta;
    public ListSyncStreamListSyncStreamResponse withMeta(ListSyncStreamListSyncStreamResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streams")
    public openapisdk.models.shared.SyncV1ServiceSyncStream[] streams;
    public ListSyncStreamListSyncStreamResponse withStreams(openapisdk.models.shared.SyncV1ServiceSyncStream[] streams) {
        this.streams = streams;
        return this;
    }
}