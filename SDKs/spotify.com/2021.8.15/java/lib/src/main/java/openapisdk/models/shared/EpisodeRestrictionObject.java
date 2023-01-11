package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EpisodeRestrictionObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-episoderestrictionobject - Find more info on the official Spotify Web API Reference
**/
public class EpisodeRestrictionObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public EpisodeRestrictionObject withReason(String reason) {
        this.reason = reason;
        return this;
    }
}