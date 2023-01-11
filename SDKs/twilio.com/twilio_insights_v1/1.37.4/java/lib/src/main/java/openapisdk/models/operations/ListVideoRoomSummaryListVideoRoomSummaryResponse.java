package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVideoRoomSummaryListVideoRoomSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListVideoRoomSummaryListVideoRoomSummaryResponseMeta meta;
    public ListVideoRoomSummaryListVideoRoomSummaryResponse withMeta(ListVideoRoomSummaryListVideoRoomSummaryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rooms")
    public openapisdk.models.shared.InsightsV1VideoRoomSummary[] rooms;
    public ListVideoRoomSummaryListVideoRoomSummaryResponse withRooms(openapisdk.models.shared.InsightsV1VideoRoomSummary[] rooms) {
        this.rooms = rooms;
        return this;
    }
}