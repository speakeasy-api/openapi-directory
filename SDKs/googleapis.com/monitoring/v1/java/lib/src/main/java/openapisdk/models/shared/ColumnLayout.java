package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnLayout
 * A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.
**/
public class ColumnLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public Column[] columns;
    public ColumnLayout withColumns(Column[] columns) {
        this.columns = columns;
        return this;
    }
}