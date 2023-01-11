package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Track
 * A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it.
**/
public class Track {
    @JsonProperty("clips")
    public Clip[] clips;
    public Track withClips(Clip[] clips) {
        this.clips = clips;
        return this;
    }
}