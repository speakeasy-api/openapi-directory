package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventFilter
 * Represents a DfaReporting event filter.
**/
public class EventFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilter")
    public PathReportDimensionValue dimensionFilter;
    public EventFilter withDimensionFilter(PathReportDimensionValue dimensionFilter) {
        this.dimensionFilter = dimensionFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventFilter withKind(String kind) {
        this.kind = kind;
        return this;
    }
}