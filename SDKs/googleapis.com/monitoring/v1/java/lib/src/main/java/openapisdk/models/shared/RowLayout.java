package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RowLayout
 * A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.
**/
public class RowLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public Row[] rows;
    public RowLayout withRows(Row[] rows) {
        this.rows = rows;
        return this;
    }
}