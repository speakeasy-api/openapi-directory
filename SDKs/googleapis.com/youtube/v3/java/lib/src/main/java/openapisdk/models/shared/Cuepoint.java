package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cuepoint
 * Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
**/
public class Cuepoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cueType")
    public CuepointCueTypeEnum cueType;
    public Cuepoint withCueType(CuepointCueTypeEnum cueType) {
        this.cueType = cueType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationSecs")
    public Long durationSecs;
    public Cuepoint withDurationSecs(Long durationSecs) {
        this.durationSecs = durationSecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Cuepoint withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Cuepoint withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOffsetTimeMs")
    public String insertionOffsetTimeMs;
    public Cuepoint withInsertionOffsetTimeMs(String insertionOffsetTimeMs) {
        this.insertionOffsetTimeMs = insertionOffsetTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("walltimeMs")
    public String walltimeMs;
    public Cuepoint withWalltimeMs(String walltimeMs) {
        this.walltimeMs = walltimeMs;
        return this;
    }
}