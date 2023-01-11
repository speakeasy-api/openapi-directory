package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Row
 * A row of altitude points in the elevation grid, ordered from west to east.
**/
public class Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altitudeDiffs")
    public Integer[] altitudeDiffs;
    public Row withAltitudeDiffs(Integer[] altitudeDiffs) {
        this.altitudeDiffs = altitudeDiffs;
        return this;
    }
}