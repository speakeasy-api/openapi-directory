package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoiceOptions
 * Additional options for Voice search
**/
public class VoiceOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coveredData")
    public VoiceOptionsCoveredDataEnum[] coveredData;
    public VoiceOptions withCoveredData(VoiceOptionsCoveredDataEnum[] coveredData) {
        this.coveredData = coveredData;
        return this;
    }
}