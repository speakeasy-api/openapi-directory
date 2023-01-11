package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Track
 * A track configuration. The resource for TracksService.
**/
public class Track {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releases")
    public TrackRelease[] releases;
    public Track withReleases(TrackRelease[] releases) {
        this.releases = releases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public String track;
    public Track withTrack(String track) {
        this.track = track;
        return this;
    }
}