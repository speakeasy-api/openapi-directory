package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBordersRequest
 * Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
**/
public class UpdateBordersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottom")
    public Border bottom;
    public UpdateBordersRequest withBottom(Border bottom) {
        this.bottom = bottom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("innerHorizontal")
    public Border innerHorizontal;
    public UpdateBordersRequest withInnerHorizontal(Border innerHorizontal) {
        this.innerHorizontal = innerHorizontal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("innerVertical")
    public Border innerVertical;
    public UpdateBordersRequest withInnerVertical(Border innerVertical) {
        this.innerVertical = innerVertical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Border left;
    public UpdateBordersRequest withLeft(Border left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public UpdateBordersRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("right")
    public Border right;
    public UpdateBordersRequest withRight(Border right) {
        this.right = right;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Border top;
    public UpdateBordersRequest withTop(Border top) {
        this.top = top;
        return this;
    }
}