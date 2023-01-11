package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlsaMetadata
 * Other properties of the build.
**/
public class SlsaMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildFinishedOn")
    public String buildFinishedOn;
    public SlsaMetadata withBuildFinishedOn(String buildFinishedOn) {
        this.buildFinishedOn = buildFinishedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildInvocationId")
    public String buildInvocationId;
    public SlsaMetadata withBuildInvocationId(String buildInvocationId) {
        this.buildInvocationId = buildInvocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildStartedOn")
    public String buildStartedOn;
    public SlsaMetadata withBuildStartedOn(String buildStartedOn) {
        this.buildStartedOn = buildStartedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeness")
    public SlsaCompleteness completeness;
    public SlsaMetadata withCompleteness(SlsaCompleteness completeness) {
        this.completeness = completeness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reproducible")
    public Boolean reproducible;
    public SlsaMetadata withReproducible(Boolean reproducible) {
        this.reproducible = reproducible;
        return this;
    }
}