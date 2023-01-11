package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TrackMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public TrackMetadataRequestTrack track;
    public TrackMetadataRequest withTrack(TrackMetadataRequestTrack track) {
        this.track = track;
        return this;
    }
}