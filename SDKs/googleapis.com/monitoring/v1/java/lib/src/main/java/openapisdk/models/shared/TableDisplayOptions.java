package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableDisplayOptions
 * Table display options that can be reused.
**/
public class TableDisplayOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shownColumns")
    public String[] shownColumns;
    public TableDisplayOptions withShownColumns(String[] shownColumns) {
        this.shownColumns = shownColumns;
        return this;
    }
}