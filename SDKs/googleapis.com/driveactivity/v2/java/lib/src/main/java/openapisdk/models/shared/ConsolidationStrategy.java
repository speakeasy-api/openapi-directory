package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsolidationStrategy
 * How the individual activities are consolidated. A set of activities may be consolidated into one combined activity if they are related in some way, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.
**/
public class ConsolidationStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacy")
    public java.util.Map<String, Object> legacy;
    public ConsolidationStrategy withLegacy(java.util.Map<String, Object> legacy) {
        this.legacy = legacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("none")
    public java.util.Map<String, Object> none;
    public ConsolidationStrategy withNone(java.util.Map<String, Object> none) {
        this.none = none;
        return this;
    }
}