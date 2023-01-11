package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeRecommendedInfo
 * Recommendation related information for this volume.
**/
public class VolumeRecommendedInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public String explanation;
    public VolumeRecommendedInfo withExplanation(String explanation) {
        this.explanation = explanation;
        return this;
    }
}