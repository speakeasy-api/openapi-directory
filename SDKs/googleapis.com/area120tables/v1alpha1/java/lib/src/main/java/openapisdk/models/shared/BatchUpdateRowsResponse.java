package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateRowsResponse
 * Response message for TablesService.BatchUpdateRows.
**/
public class BatchUpdateRowsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public Row[] rows;
    public BatchUpdateRowsResponse withRows(Row[] rows) {
        this.rows = rows;
        return this;
    }
}