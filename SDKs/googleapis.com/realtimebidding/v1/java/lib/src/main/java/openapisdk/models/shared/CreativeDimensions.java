package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeDimensions
 * The dimensions of a creative. This applies to only HTML and Native creatives.
**/
public class CreativeDimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public String height;
    public CreativeDimensions withHeight(String height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public String width;
    public CreativeDimensions withWidth(String width) {
        this.width = width;
        return this;
    }
}