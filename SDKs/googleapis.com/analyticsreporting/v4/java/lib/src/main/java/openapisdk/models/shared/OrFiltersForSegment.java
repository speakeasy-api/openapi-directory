package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrFiltersForSegment
 * A list of segment filters in the `OR` group are combined with the logical OR operator.
**/
public class OrFiltersForSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentFilterClauses")
    public SegmentFilterClause[] segmentFilterClauses;
    public OrFiltersForSegment withSegmentFilterClauses(SegmentFilterClause[] segmentFilterClauses) {
        this.segmentFilterClauses = segmentFilterClauses;
        return this;
    }
}