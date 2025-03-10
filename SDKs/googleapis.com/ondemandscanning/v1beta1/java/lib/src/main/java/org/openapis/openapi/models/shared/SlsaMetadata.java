/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SlsaMetadata - Other properties of the build.
 */
public class SlsaMetadata {
    /**
     * The timestamp of when the build completed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildFinishedOn")
    public String buildFinishedOn;

    public SlsaMetadata withBuildFinishedOn(String buildFinishedOn) {
        this.buildFinishedOn = buildFinishedOn;
        return this;
    }
    
    /**
     * Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildInvocationId")
    public String buildInvocationId;

    public SlsaMetadata withBuildInvocationId(String buildInvocationId) {
        this.buildInvocationId = buildInvocationId;
        return this;
    }
    
    /**
     * The timestamp of when the build started.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildStartedOn")
    public String buildStartedOn;

    public SlsaMetadata withBuildStartedOn(String buildStartedOn) {
        this.buildStartedOn = buildStartedOn;
        return this;
    }
    
    /**
     * Indicates that the builder claims certain fields in this message to be complete.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeness")
    public SlsaCompleteness completeness;

    public SlsaMetadata withCompleteness(SlsaCompleteness completeness) {
        this.completeness = completeness;
        return this;
    }
    
    /**
     * If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reproducible")
    public Boolean reproducible;

    public SlsaMetadata withReproducible(Boolean reproducible) {
        this.reproducible = reproducible;
        return this;
    }
    
    public SlsaMetadata(){}
}
