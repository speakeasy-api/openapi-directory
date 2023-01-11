package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceObjectReference
 * Reference to a data source object.
**/
public class DataSourceObjectReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chartId")
    public Integer chartId;
    public DataSourceObjectReference withChartId(Integer chartId) {
        this.chartId = chartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceFormulaCell")
    public GridCoordinate dataSourceFormulaCell;
    public DataSourceObjectReference withDataSourceFormulaCell(GridCoordinate dataSourceFormulaCell) {
        this.dataSourceFormulaCell = dataSourceFormulaCell;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourcePivotTableAnchorCell")
    public GridCoordinate dataSourcePivotTableAnchorCell;
    public DataSourceObjectReference withDataSourcePivotTableAnchorCell(GridCoordinate dataSourcePivotTableAnchorCell) {
        this.dataSourcePivotTableAnchorCell = dataSourcePivotTableAnchorCell;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceTableAnchorCell")
    public GridCoordinate dataSourceTableAnchorCell;
    public DataSourceObjectReference withDataSourceTableAnchorCell(GridCoordinate dataSourceTableAnchorCell) {
        this.dataSourceTableAnchorCell = dataSourceTableAnchorCell;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public String sheetId;
    public DataSourceObjectReference withSheetId(String sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}