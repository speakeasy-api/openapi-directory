package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metadata
 * Other properties of the build.
**/
public class Metadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildFinishedOn")
    public String buildFinishedOn;
    public Metadata withBuildFinishedOn(String buildFinishedOn) {
        this.buildFinishedOn = buildFinishedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildInvocationId")
    public String buildInvocationId;
    public Metadata withBuildInvocationId(String buildInvocationId) {
        this.buildInvocationId = buildInvocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildStartedOn")
    public String buildStartedOn;
    public Metadata withBuildStartedOn(String buildStartedOn) {
        this.buildStartedOn = buildStartedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeness")
    public Completeness completeness;
    public Metadata withCompleteness(Completeness completeness) {
        this.completeness = completeness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reproducible")
    public Boolean reproducible;
    public Metadata withReproducible(Boolean reproducible) {
        this.reproducible = reproducible;
        return this;
    }
}