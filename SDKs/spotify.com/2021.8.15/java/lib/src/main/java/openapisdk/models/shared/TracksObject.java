package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TracksObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public TrackObject[] tracks;
    public TracksObject withTracks(TrackObject[] tracks) {
        this.tracks = tracks;
        return this;
    }
}