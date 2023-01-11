package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisjunctiveMatchStatement
 * Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
**/
public class DisjunctiveMatchStatement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventFilters")
    public EventFilter[] eventFilters;
    public DisjunctiveMatchStatement withEventFilters(EventFilter[] eventFilters) {
        this.eventFilters = eventFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DisjunctiveMatchStatement withKind(String kind) {
        this.kind = kind;
        return this;
    }
}