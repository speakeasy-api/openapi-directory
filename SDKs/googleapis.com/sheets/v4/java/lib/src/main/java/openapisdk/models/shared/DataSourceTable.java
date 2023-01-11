package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceTable
 * A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
**/
public class DataSourceTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnSelectionType")
    public DataSourceTableColumnSelectionTypeEnum columnSelectionType;
    public DataSourceTable withColumnSelectionType(DataSourceTableColumnSelectionTypeEnum columnSelectionType) {
        this.columnSelectionType = columnSelectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public DataSourceColumnReference[] columns;
    public DataSourceTable withColumns(DataSourceColumnReference[] columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataExecutionStatus")
    public DataExecutionStatus dataExecutionStatus;
    public DataSourceTable withDataExecutionStatus(DataExecutionStatus dataExecutionStatus) {
        this.dataExecutionStatus = dataExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public DataSourceTable withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterSpecs")
    public FilterSpec[] filterSpecs;
    public DataSourceTable withFilterSpecs(FilterSpec[] filterSpecs) {
        this.filterSpecs = filterSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowLimit")
    public Integer rowLimit;
    public DataSourceTable withRowLimit(Integer rowLimit) {
        this.rowLimit = rowLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortSpecs")
    public SortSpec[] sortSpecs;
    public DataSourceTable withSortSpecs(SortSpec[] sortSpecs) {
        this.sortSpecs = sortSpecs;
        return this;
    }
}