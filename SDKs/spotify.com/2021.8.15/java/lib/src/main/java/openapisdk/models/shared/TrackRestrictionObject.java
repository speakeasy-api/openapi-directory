package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackRestrictionObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-trackrestrictionobject - Find more info on the official Spotify Web API Reference
**/
public class TrackRestrictionObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public TrackRestrictionObject withReason(String reason) {
        this.reason = reason;
        return this;
    }
}