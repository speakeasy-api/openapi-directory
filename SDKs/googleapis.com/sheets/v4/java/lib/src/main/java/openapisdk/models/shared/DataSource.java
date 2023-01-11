package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSource
 * Information about an external data source in the spreadsheet.
**/
public class DataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calculatedColumns")
    public DataSourceColumn[] calculatedColumns;
    public DataSource withCalculatedColumns(DataSourceColumn[] calculatedColumns) {
        this.calculatedColumns = calculatedColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public DataSource withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public DataSource withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public DataSourceSpec spec;
    public DataSource withSpec(DataSourceSpec spec) {
        this.spec = spec;
        return this;
    }
}