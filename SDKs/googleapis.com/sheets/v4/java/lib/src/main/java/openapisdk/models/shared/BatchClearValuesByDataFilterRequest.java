package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchClearValuesByDataFilterRequest
 * The request for clearing more than one range selected by a DataFilter in a spreadsheet.
**/
public class BatchClearValuesByDataFilterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilters")
    public DataFilter[] dataFilters;
    public BatchClearValuesByDataFilterRequest withDataFilters(DataFilter[] dataFilters) {
        this.dataFilters = dataFilters;
        return this;
    }
}