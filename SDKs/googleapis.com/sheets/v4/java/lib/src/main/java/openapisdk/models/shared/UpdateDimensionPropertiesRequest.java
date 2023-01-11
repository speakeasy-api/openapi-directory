package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDimensionPropertiesRequest
 * Updates properties of dimensions within the specified range.
**/
public class UpdateDimensionPropertiesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceSheetRange")
    public DataSourceSheetDimensionRange dataSourceSheetRange;
    public UpdateDimensionPropertiesRequest withDataSourceSheetRange(DataSourceSheetDimensionRange dataSourceSheetRange) {
        this.dataSourceSheetRange = dataSourceSheetRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateDimensionPropertiesRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public DimensionProperties properties;
    public UpdateDimensionPropertiesRequest withProperties(DimensionProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public DimensionRange range;
    public UpdateDimensionPropertiesRequest withRange(DimensionRange range) {
        this.range = range;
        return this;
    }
}