package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRoomListRoomResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRoomListRoomResponseMeta meta;
    public ListRoomListRoomResponse withMeta(ListRoomListRoomResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rooms")
    public openapisdk.models.shared.VideoV1Room[] rooms;
    public ListRoomListRoomResponse withRooms(openapisdk.models.shared.VideoV1Room[] rooms) {
        this.rooms = rooms;
        return this;
    }
}