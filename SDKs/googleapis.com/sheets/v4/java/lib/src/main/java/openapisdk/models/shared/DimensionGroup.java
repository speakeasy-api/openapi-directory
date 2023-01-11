package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionGroup
 * A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.
**/
public class DimensionGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collapsed")
    public Boolean collapsed;
    public DimensionGroup withCollapsed(Boolean collapsed) {
        this.collapsed = collapsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("depth")
    public Integer depth;
    public DimensionGroup withDepth(Integer depth) {
        this.depth = depth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public DimensionRange range;
    public DimensionGroup withRange(DimensionRange range) {
        this.range = range;
        return this;
    }
}