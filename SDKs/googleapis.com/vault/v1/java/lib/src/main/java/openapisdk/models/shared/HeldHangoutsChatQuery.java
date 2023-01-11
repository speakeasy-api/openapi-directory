package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HeldHangoutsChatQuery
 * Options for Chat holds.
**/
public class HeldHangoutsChatQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeRooms")
    public Boolean includeRooms;
    public HeldHangoutsChatQuery withIncludeRooms(Boolean includeRooms) {
        this.includeRooms = includeRooms;
        return this;
    }
}