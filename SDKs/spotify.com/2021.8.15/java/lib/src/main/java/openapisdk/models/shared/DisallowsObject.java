package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisallowsObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-disallowsobject - Find more info on the official Spotify Web API Reference
**/
public class DisallowsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interrupting_playback")
    public Boolean interruptingPlayback;
    public DisallowsObject withInterruptingPlayback(Boolean interruptingPlayback) {
        this.interruptingPlayback = interruptingPlayback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pausing")
    public Boolean pausing;
    public DisallowsObject withPausing(Boolean pausing) {
        this.pausing = pausing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resuming")
    public Boolean resuming;
    public DisallowsObject withResuming(Boolean resuming) {
        this.resuming = resuming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seeking")
    public Boolean seeking;
    public DisallowsObject withSeeking(Boolean seeking) {
        this.seeking = seeking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipping_next")
    public Boolean skippingNext;
    public DisallowsObject withSkippingNext(Boolean skippingNext) {
        this.skippingNext = skippingNext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipping_prev")
    public Boolean skippingPrev;
    public DisallowsObject withSkippingPrev(Boolean skippingPrev) {
        this.skippingPrev = skippingPrev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toggling_repeat_context")
    public Boolean togglingRepeatContext;
    public DisallowsObject withTogglingRepeatContext(Boolean togglingRepeatContext) {
        this.togglingRepeatContext = togglingRepeatContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toggling_repeat_track")
    public Boolean togglingRepeatTrack;
    public DisallowsObject withTogglingRepeatTrack(Boolean togglingRepeatTrack) {
        this.togglingRepeatTrack = togglingRepeatTrack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toggling_shuffle")
    public Boolean togglingShuffle;
    public DisallowsObject withTogglingShuffle(Boolean togglingShuffle) {
        this.togglingShuffle = togglingShuffle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferring_playback")
    public Boolean transferringPlayback;
    public DisallowsObject withTransferringPlayback(Boolean transferringPlayback) {
        this.transferringPlayback = transferringPlayback;
        return this;
    }
}