package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelGrouping
 * A channel grouping defines a set of rules that can be used to categorize events in a path report.
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
    @JsonProperty("name")
    public String name;
    public ChannelGrouping withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public Rule[] rules;
    public ChannelGrouping withRules(Rule[] rules) {
        this.rules = rules;
        return this;
    }
}