package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineStyle
 * Properties that describe the style of a line.
**/
public class LineStyle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public LineStyleTypeEnum type;
    public LineStyle withType(LineStyleTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public LineStyle withWidth(Integer width) {
        this.width = width;
        return this;
    }
}