package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotTable
 * A pivot table.
**/
public class PivotTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public PivotGroup[] columns;
    public PivotTable withColumns(PivotGroup[] columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criteria")
    public java.util.Map<String, PivotFilterCriteria> criteria;
    public PivotTable withCriteria(java.util.Map<String, PivotFilterCriteria> criteria) {
        this.criteria = criteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataExecutionStatus")
    public DataExecutionStatus dataExecutionStatus;
    public PivotTable withDataExecutionStatus(DataExecutionStatus dataExecutionStatus) {
        this.dataExecutionStatus = dataExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public PivotTable withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterSpecs")
    public PivotFilterSpec[] filterSpecs;
    public PivotTable withFilterSpecs(PivotFilterSpec[] filterSpecs) {
        this.filterSpecs = filterSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public PivotGroup[] rows;
    public PivotTable withRows(PivotGroup[] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GridRange source;
    public PivotTable withSource(GridRange source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueLayout")
    public PivotTableValueLayoutEnum valueLayout;
    public PivotTable withValueLayout(PivotTableValueLayoutEnum valueLayout) {
        this.valueLayout = valueLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public PivotValue[] values;
    public PivotTable withValues(PivotValue[] values) {
        this.values = values;
        return this;
    }
}