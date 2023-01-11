package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventFilter
 * Defines the type of filter to be applied to the path, a DV360 event dimension filter.
**/
public class EventFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilter")
    public PathQueryOptionsFilter dimensionFilter;
    public EventFilter withDimensionFilter(PathQueryOptionsFilter dimensionFilter) {
        this.dimensionFilter = dimensionFilter;
        return this;
    }
}