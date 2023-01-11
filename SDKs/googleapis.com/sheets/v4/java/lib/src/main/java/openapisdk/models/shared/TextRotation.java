package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextRotation
 * The rotation applied to text in a cell.
**/
public class TextRotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("angle")
    public Integer angle;
    public TextRotation withAngle(Integer angle) {
        this.angle = angle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vertical")
    public Boolean vertical;
    public TextRotation withVertical(Boolean vertical) {
        this.vertical = vertical;
        return this;
    }
}