package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisjunctiveMatchStatement
 * DisjunctiveMatchStatement that OR's all contained filters.
**/
public class DisjunctiveMatchStatement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventFilters")
    public EventFilter[] eventFilters;
    public DisjunctiveMatchStatement withEventFilters(EventFilter[] eventFilters) {
        this.eventFilters = eventFilters;
        return this;
    }
}