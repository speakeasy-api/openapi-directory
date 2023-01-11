package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NamedRange
 * A named range.
**/
public class NamedRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NamedRange withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRangeId")
    public String namedRangeId;
    public NamedRange withNamedRangeId(String namedRangeId) {
        this.namedRangeId = namedRangeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public NamedRange withRange(GridRange range) {
        this.range = range;
        return this;
    }
}