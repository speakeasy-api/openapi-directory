package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Track {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public String track;
    public Track withTrack(String track) {
        this.track = track;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userFraction")
    public Double userFraction;
    public Track withUserFraction(Double userFraction) {
        this.userFraction = userFraction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCodes")
    public Integer[] versionCodes;
    public Track withVersionCodes(Integer[] versionCodes) {
        this.versionCodes = versionCodes;
        return this;
    }
}