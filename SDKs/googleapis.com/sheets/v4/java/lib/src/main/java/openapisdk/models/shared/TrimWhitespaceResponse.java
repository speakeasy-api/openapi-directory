package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrimWhitespaceResponse
 * The result of trimming whitespace in cells.
**/
public class TrimWhitespaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cellsChangedCount")
    public Integer cellsChangedCount;
    public TrimWhitespaceResponse withCellsChangedCount(Integer cellsChangedCount) {
        this.cellsChangedCount = cellsChangedCount;
        return this;
    }
}