package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RowData
 * Data about each cell in a row.
**/
public class RowData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public CellData[] values;
    public RowData withValues(CellData[] values) {
        this.values = values;
        return this;
    }
}