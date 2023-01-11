package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InterpolationPoint
 * A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
**/
public class InterpolationPoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public Color color;
    public InterpolationPoint withColor(Color color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorStyle")
    public ColorStyle colorStyle;
    public InterpolationPoint withColorStyle(ColorStyle colorStyle) {
        this.colorStyle = colorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public InterpolationPointTypeEnum type;
    public InterpolationPoint withType(InterpolationPointTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public InterpolationPoint withValue(String value) {
        this.value = value;
        return this;
    }
}