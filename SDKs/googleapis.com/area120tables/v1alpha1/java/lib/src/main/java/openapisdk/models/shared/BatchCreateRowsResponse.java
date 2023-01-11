package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreateRowsResponse
 * Response message for TablesService.BatchCreateRows.
**/
public class BatchCreateRowsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public Row[] rows;
    public BatchCreateRowsResponse withRows(Row[] rows) {
        this.rows = rows;
        return this;
    }
}