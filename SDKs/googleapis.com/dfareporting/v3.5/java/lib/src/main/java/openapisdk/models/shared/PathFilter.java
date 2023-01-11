package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathFilter
 * Represents a DfaReporting path filter.
**/
public class PathFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventFilters")
    public EventFilter[] eventFilters;
    public PathFilter withEventFilters(EventFilter[] eventFilters) {
        this.eventFilters = eventFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PathFilter withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathMatchPosition")
    public PathFilterPathMatchPositionEnum pathMatchPosition;
    public PathFilter withPathMatchPosition(PathFilterPathMatchPositionEnum pathMatchPosition) {
        this.pathMatchPosition = pathMatchPosition;
        return this;
    }
}