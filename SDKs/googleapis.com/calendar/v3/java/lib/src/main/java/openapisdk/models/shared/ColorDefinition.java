package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColorDefinition
 * A calendar color definition.
**/
public class ColorDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("background")
    public String background;
    public ColorDefinition withBackground(String background) {
        this.background = background;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foreground")
    public String foreground;
    public ColorDefinition withForeground(String foreground) {
        this.foreground = foreground;
        return this;
    }
}