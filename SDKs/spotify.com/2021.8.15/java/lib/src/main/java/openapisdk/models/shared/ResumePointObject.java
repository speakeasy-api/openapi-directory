package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResumePointObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-resumepointobject - Find more info on the official Spotify Web API Reference
**/
public class ResumePointObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fully_played")
    public Boolean fullyPlayed;
    public ResumePointObject withFullyPlayed(Boolean fullyPlayed) {
        this.fullyPlayed = fullyPlayed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resume_position_ms")
    public Integer resumePositionMs;
    public ResumePointObject withResumePositionMs(Integer resumePositionMs) {
        this.resumePositionMs = resumePositionMs;
        return this;
    }
}