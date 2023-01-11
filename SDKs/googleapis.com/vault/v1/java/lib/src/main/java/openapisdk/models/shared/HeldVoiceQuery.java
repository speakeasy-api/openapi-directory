package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HeldVoiceQuery
 * Options for Voice holds.
**/
public class HeldVoiceQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coveredData")
    public HeldVoiceQueryCoveredDataEnum[] coveredData;
    public HeldVoiceQuery withCoveredData(HeldVoiceQueryCoveredDataEnum[] coveredData) {
        this.coveredData = coveredData;
        return this;
    }
}