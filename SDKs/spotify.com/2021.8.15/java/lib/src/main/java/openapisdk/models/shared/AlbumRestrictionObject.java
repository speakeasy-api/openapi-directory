package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlbumRestrictionObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-albumrestrictionobject - Find more info on the official Spotify Web API Reference
**/
public class AlbumRestrictionObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public AlbumRestrictionObject withReason(String reason) {
        this.reason = reason;
        return this;
    }
}