package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HangoutsChatInfo
 * The Chat spaces to search
**/
public class HangoutsChatInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomId")
    public String[] roomId;
    public HangoutsChatInfo withRoomId(String[] roomId) {
        this.roomId = roomId;
        return this;
    }
}