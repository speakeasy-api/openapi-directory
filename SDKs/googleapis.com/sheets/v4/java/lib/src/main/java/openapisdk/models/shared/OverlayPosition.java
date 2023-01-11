package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OverlayPosition
 * The location an object is overlaid on top of a grid.
**/
public class OverlayPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anchorCell")
    public GridCoordinate anchorCell;
    public OverlayPosition withAnchorCell(GridCoordinate anchorCell) {
        this.anchorCell = anchorCell;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPixels")
    public Integer heightPixels;
    public OverlayPosition withHeightPixels(Integer heightPixels) {
        this.heightPixels = heightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetXPixels")
    public Integer offsetXPixels;
    public OverlayPosition withOffsetXPixels(Integer offsetXPixels) {
        this.offsetXPixels = offsetXPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetYPixels")
    public Integer offsetYPixels;
    public OverlayPosition withOffsetYPixels(Integer offsetYPixels) {
        this.offsetYPixels = offsetYPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPixels")
    public Integer widthPixels;
    public OverlayPosition withWidthPixels(Integer widthPixels) {
        this.widthPixels = widthPixels;
        return this;
    }
}