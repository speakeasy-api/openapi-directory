package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GridProperties
 * Properties of a grid.
**/
public class GridProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnCount")
    public Integer columnCount;
    public GridProperties withColumnCount(Integer columnCount) {
        this.columnCount = columnCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnGroupControlAfter")
    public Boolean columnGroupControlAfter;
    public GridProperties withColumnGroupControlAfter(Boolean columnGroupControlAfter) {
        this.columnGroupControlAfter = columnGroupControlAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frozenColumnCount")
    public Integer frozenColumnCount;
    public GridProperties withFrozenColumnCount(Integer frozenColumnCount) {
        this.frozenColumnCount = frozenColumnCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frozenRowCount")
    public Integer frozenRowCount;
    public GridProperties withFrozenRowCount(Integer frozenRowCount) {
        this.frozenRowCount = frozenRowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideGridlines")
    public Boolean hideGridlines;
    public GridProperties withHideGridlines(Boolean hideGridlines) {
        this.hideGridlines = hideGridlines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowCount")
    public Integer rowCount;
    public GridProperties withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowGroupControlAfter")
    public Boolean rowGroupControlAfter;
    public GridProperties withRowGroupControlAfter(Boolean rowGroupControlAfter) {
        this.rowGroupControlAfter = rowGroupControlAfter;
        return this;
    }
}