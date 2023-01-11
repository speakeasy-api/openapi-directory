package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Row
 * Row representation.
**/
public class Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cells")
    public Cell[] cells;
    public Row withCells(Cell[] cells) {
        this.cells = cells;
        return this;
    }
}