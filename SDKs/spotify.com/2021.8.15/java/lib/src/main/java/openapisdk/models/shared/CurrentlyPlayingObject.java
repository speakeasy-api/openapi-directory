package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CurrentlyPlayingObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingobject - Find more info on the official Spotify Web API Reference
**/
public class CurrentlyPlayingObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ContextObject context;
    public CurrentlyPlayingObject withContext(ContextObject context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currently_playing_type")
    public String currentlyPlayingType;
    public CurrentlyPlayingObject withCurrentlyPlayingType(String currentlyPlayingType) {
        this.currentlyPlayingType = currentlyPlayingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_playing")
    public Boolean isPlaying;
    public CurrentlyPlayingObject withIsPlaying(Boolean isPlaying) {
        this.isPlaying = isPlaying;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public Object item;
    public CurrentlyPlayingObject withItem(Object item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress_ms")
    public Integer progressMs;
    public CurrentlyPlayingObject withProgressMs(Integer progressMs) {
        this.progressMs = progressMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Integer timestamp;
    public CurrentlyPlayingObject withTimestamp(Integer timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}