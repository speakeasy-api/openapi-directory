package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelGroupingRule
 * Represents a DfaReporting channel grouping rule.
**/
public class ChannelGroupingRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disjunctiveMatchStatements")
    public DisjunctiveMatchStatement[] disjunctiveMatchStatements;
    public ChannelGroupingRule withDisjunctiveMatchStatements(DisjunctiveMatchStatement[] disjunctiveMatchStatements) {
        this.disjunctiveMatchStatements = disjunctiveMatchStatements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChannelGroupingRule withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ChannelGroupingRule withName(String name) {
        this.name = name;
        return this;
    }
}