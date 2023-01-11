package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeatureSettings
 * The feature specific settings to be used in the application. These define behaviors that are user configurable.
**/
public class FeatureSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splitHealthChecks")
    public Boolean splitHealthChecks;
    public FeatureSettings withSplitHealthChecks(Boolean splitHealthChecks) {
        this.splitHealthChecks = splitHealthChecks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useContainerOptimizedOs")
    public Boolean useContainerOptimizedOs;
    public FeatureSettings withUseContainerOptimizedOs(Boolean useContainerOptimizedOs) {
        this.useContainerOptimizedOs = useContainerOptimizedOs;
        return this;
    }
}