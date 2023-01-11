package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Timeline
 * A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
**/
public class Timeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("background")
    public String background;
    public Timeline withBackground(String background) {
        this.background = background;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cache")
    public Boolean cache;
    public Timeline withCache(Boolean cache) {
        this.cache = cache;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fonts")
    public Font[] fonts;
    public Timeline withFonts(Font[] fonts) {
        this.fonts = fonts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soundtrack")
    public Soundtrack soundtrack;
    public Timeline withSoundtrack(Soundtrack soundtrack) {
        this.soundtrack = soundtrack;
        return this;
    }
    @JsonProperty("tracks")
    public Track[] tracks;
    public Timeline withTracks(Track[] tracks) {
        this.tracks = tracks;
        return this;
    }
}