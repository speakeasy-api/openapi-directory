package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Borders
 * The borders of the cell.
**/
public class Borders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottom")
    public Border bottom;
    public Borders withBottom(Border bottom) {
        this.bottom = bottom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Border left;
    public Borders withLeft(Border left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("right")
    public Border right;
    public Borders withRight(Border right) {
        this.right = right;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Border top;
    public Borders withTop(Border top) {
        this.top = top;
        return this;
    }
}