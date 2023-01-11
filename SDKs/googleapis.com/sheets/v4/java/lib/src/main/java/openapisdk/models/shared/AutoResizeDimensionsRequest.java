package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoResizeDimensionsRequest
 * Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
**/
public class AutoResizeDimensionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceSheetDimensions")
    public DataSourceSheetDimensionRange dataSourceSheetDimensions;
    public AutoResizeDimensionsRequest withDataSourceSheetDimensions(DataSourceSheetDimensionRange dataSourceSheetDimensions) {
        this.dataSourceSheetDimensions = dataSourceSheetDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public DimensionRange dimensions;
    public AutoResizeDimensionsRequest withDimensions(DimensionRange dimensions) {
        this.dimensions = dimensions;
        return this;
    }
}