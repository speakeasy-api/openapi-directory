package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DisplayOption
 * Option definition for STATUS dataTypes.
**/
public class DisplayOption {
    @JsonProperty("label")
    public String label;
    public DisplayOption withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DisplayOption withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public DisplayOptionTypeEnum type;
    public DisplayOption withType(DisplayOptionTypeEnum type) {
        this.type = type;
        return this;
    }
}