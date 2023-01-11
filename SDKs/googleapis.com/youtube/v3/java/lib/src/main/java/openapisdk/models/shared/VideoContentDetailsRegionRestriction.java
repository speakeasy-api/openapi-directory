package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoContentDetailsRegionRestriction
 * DEPRECATED Region restriction of the video.
**/
public class VideoContentDetailsRegionRestriction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed")
    public String[] allowed;
    public VideoContentDetailsRegionRestriction withAllowed(String[] allowed) {
        this.allowed = allowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocked")
    public String[] blocked;
    public VideoContentDetailsRegionRestriction withBlocked(String[] blocked) {
        this.blocked = blocked;
        return this;
    }
}