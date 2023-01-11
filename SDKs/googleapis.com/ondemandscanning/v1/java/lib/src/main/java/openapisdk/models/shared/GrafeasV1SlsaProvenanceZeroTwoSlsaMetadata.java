package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata
 * Other properties of the build.
**/
public class GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildFinishedOn")
    public String buildFinishedOn;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata withBuildFinishedOn(String buildFinishedOn) {
        this.buildFinishedOn = buildFinishedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildInvocationId")
    public String buildInvocationId;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata withBuildInvocationId(String buildInvocationId) {
        this.buildInvocationId = buildInvocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildStartedOn")
    public String buildStartedOn;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata withBuildStartedOn(String buildStartedOn) {
        this.buildStartedOn = buildStartedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeness")
    public GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness completeness;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata withCompleteness(GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness completeness) {
        this.completeness = completeness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reproducible")
    public Boolean reproducible;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata withReproducible(Boolean reproducible) {
        this.reproducible = reproducible;
        return this;
    }
}