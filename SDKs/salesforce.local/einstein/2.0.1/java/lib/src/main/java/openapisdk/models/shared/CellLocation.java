package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CellLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colIndex")
    public Integer colIndex;
    public CellLocation withColIndex(Integer colIndex) {
        this.colIndex = colIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowIndex")
    public Integer rowIndex;
    public CellLocation withRowIndex(Integer rowIndex) {
        this.rowIndex = rowIndex;
        return this;
    }
}