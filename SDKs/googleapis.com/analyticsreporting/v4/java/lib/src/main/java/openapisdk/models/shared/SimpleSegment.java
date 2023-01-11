package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimpleSegment
 * A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
**/
public class SimpleSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orFiltersForSegment")
    public OrFiltersForSegment[] orFiltersForSegment;
    public SimpleSegment withOrFiltersForSegment(OrFiltersForSegment[] orFiltersForSegment) {
        this.orFiltersForSegment = orFiltersForSegment;
        return this;
    }
}