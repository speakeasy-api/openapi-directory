package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmbeddedObjectBorder
 * A border along an embedded object.
**/
public class EmbeddedObjectBorder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public Color color;
    public EmbeddedObjectBorder withColor(Color color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorStyle")
    public ColorStyle colorStyle;
    public EmbeddedObjectBorder withColorStyle(ColorStyle colorStyle) {
        this.colorStyle = colorStyle;
        return this;
    }
}