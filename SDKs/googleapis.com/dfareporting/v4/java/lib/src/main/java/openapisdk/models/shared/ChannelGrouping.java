package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelGrouping
 * Represents a DfaReporting channel grouping.
**/
public class ChannelGrouping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallbackName")
    public String fallbackName;
    public ChannelGrouping withFallbackName(String fallbackName) {
        this.fallbackName = fallbackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChannelGrouping withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ChannelGrouping withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public ChannelGroupingRule[] rules;
    public ChannelGrouping withRules(ChannelGroupingRule[] rules) {
        this.rules = rules;
        return this;
    }
}