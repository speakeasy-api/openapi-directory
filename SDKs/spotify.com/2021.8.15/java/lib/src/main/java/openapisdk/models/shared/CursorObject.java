package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CursorObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorobject - Find more info on the official Spotify Web API Reference
**/
public class CursorObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("after")
    public String after;
    public CursorObject withAfter(String after) {
        this.after = after;
        return this;
    }
}