package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FontDtoInput
 * The Font dto object
**/
public class FontDtoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Style")
    public Integer style;
    public FontDtoInput withStyle(Integer style) {
        this.style = style;
        return this;
    }
}