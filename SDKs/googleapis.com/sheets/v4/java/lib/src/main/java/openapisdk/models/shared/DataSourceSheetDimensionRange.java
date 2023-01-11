package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceSheetDimensionRange
 * A range along a single dimension on a DATA_SOURCE sheet.
**/
public class DataSourceSheetDimensionRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnReferences")
    public DataSourceColumnReference[] columnReferences;
    public DataSourceSheetDimensionRange withColumnReferences(DataSourceColumnReference[] columnReferences) {
        this.columnReferences = columnReferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public DataSourceSheetDimensionRange withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}