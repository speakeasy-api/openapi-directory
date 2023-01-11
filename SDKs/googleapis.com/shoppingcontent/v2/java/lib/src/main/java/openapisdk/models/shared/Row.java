package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cells")
    public Value[] cells;
    public Row withCells(Value[] cells) {
        this.cells = cells;
        return this;
    }
}