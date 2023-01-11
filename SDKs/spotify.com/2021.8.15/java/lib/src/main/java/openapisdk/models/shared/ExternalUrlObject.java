package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExternalUrlObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-externalurlobject - Find more info on the official Spotify Web API Reference
**/
public class ExternalUrlObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spotify")
    public String spotify;
    public ExternalUrlObject withSpotify(String spotify) {
        this.spotify = spotify;
        return this;
    }
}