package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdSize
 * Represents size of a single ad slot, or a creative.
**/
public class AdSize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public String height;
    public AdSize withHeight(String height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AdSizeTypeEnum type;
    public AdSize withType(AdSizeTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public String width;
    public AdSize withWidth(String width) {
        this.width = width;
        return this;
    }
}