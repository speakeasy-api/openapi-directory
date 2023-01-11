package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GridData
 * Data in the grid, as well as metadata about the dimensions.
**/
public class GridData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnMetadata")
    public DimensionProperties[] columnMetadata;
    public GridData withColumnMetadata(DimensionProperties[] columnMetadata) {
        this.columnMetadata = columnMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowData")
    public RowData[] rowData;
    public GridData withRowData(RowData[] rowData) {
        this.rowData = rowData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowMetadata")
    public DimensionProperties[] rowMetadata;
    public GridData withRowMetadata(DimensionProperties[] rowMetadata) {
        this.rowMetadata = rowMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startColumn")
    public Integer startColumn;
    public GridData withStartColumn(Integer startColumn) {
        this.startColumn = startColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startRow")
    public Integer startRow;
    public GridData withStartRow(Integer startRow) {
        this.startRow = startRow;
        return this;
    }
}