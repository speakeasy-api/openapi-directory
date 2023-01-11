package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSpreadsheetByDataFilterRequest
 * The request for retrieving a Spreadsheet.
**/
public class GetSpreadsheetByDataFilterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilters")
    public DataFilter[] dataFilters;
    public GetSpreadsheetByDataFilterRequest withDataFilters(DataFilter[] dataFilters) {
        this.dataFilters = dataFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeGridData")
    public Boolean includeGridData;
    public GetSpreadsheetByDataFilterRequest withIncludeGridData(Boolean includeGridData) {
        this.includeGridData = includeGridData;
        return this;
    }
}