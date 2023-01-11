package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CurrentlyPlayingContextObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingcontextobject - Find more info on the official Spotify Web API Reference
**/
public class CurrentlyPlayingContextObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public DisallowsObject actions;
    public CurrentlyPlayingContextObject withActions(DisallowsObject actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ContextObject context;
    public CurrentlyPlayingContextObject withContext(ContextObject context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currently_playing_type")
    public String currentlyPlayingType;
    public CurrentlyPlayingContextObject withCurrentlyPlayingType(String currentlyPlayingType) {
        this.currentlyPlayingType = currentlyPlayingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public DeviceObject device;
    public CurrentlyPlayingContextObject withDevice(DeviceObject device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_playing")
    public Boolean isPlaying;
    public CurrentlyPlayingContextObject withIsPlaying(Boolean isPlaying) {
        this.isPlaying = isPlaying;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public Object item;
    public CurrentlyPlayingContextObject withItem(Object item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress_ms")
    public Integer progressMs;
    public CurrentlyPlayingContextObject withProgressMs(Integer progressMs) {
        this.progressMs = progressMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeat_state")
    public String repeatState;
    public CurrentlyPlayingContextObject withRepeatState(String repeatState) {
        this.repeatState = repeatState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shuffle_state")
    public String shuffleState;
    public CurrentlyPlayingContextObject withShuffleState(String shuffleState) {
        this.shuffleState = shuffleState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Integer timestamp;
    public CurrentlyPlayingContextObject withTimestamp(Integer timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}