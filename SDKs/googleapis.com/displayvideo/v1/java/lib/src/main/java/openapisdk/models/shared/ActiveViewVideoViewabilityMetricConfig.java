package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActiveViewVideoViewabilityMetricConfig
 * Configuration for custom Active View video viewability metrics.
**/
public class ActiveViewVideoViewabilityMetricConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ActiveViewVideoViewabilityMetricConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumDuration")
    public ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum minimumDuration;
    public ActiveViewVideoViewabilityMetricConfig withMinimumDuration(ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum minimumDuration) {
        this.minimumDuration = minimumDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumQuartile")
    public ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum minimumQuartile;
    public ActiveViewVideoViewabilityMetricConfig withMinimumQuartile(ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum minimumQuartile) {
        this.minimumQuartile = minimumQuartile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumViewability")
    public ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum minimumViewability;
    public ActiveViewVideoViewabilityMetricConfig withMinimumViewability(ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum minimumViewability) {
        this.minimumViewability = minimumViewability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumVolume")
    public ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum minimumVolume;
    public ActiveViewVideoViewabilityMetricConfig withMinimumVolume(ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum minimumVolume) {
        this.minimumVolume = minimumVolume;
        return this;
    }
}