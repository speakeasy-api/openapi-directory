package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HangoutsChatOptions
 * Additional options for Google Chat search
**/
public class HangoutsChatOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeRooms")
    public Boolean includeRooms;
    public HangoutsChatOptions withIncludeRooms(Boolean includeRooms) {
        this.includeRooms = includeRooms;
        return this;
    }
}