package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OffsetPosition
 * Offset Position.
**/
public class OffsetPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Integer left;
    public OffsetPosition withLeft(Integer left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Integer top;
    public OffsetPosition withTop(Integer top) {
        this.top = top;
        return this;
    }
}