package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LightSettings
 * Settings to control notification LED.
**/
public class LightSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public Color color;
    public LightSettings withColor(Color color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lightOffDuration")
    public String lightOffDuration;
    public LightSettings withLightOffDuration(String lightOffDuration) {
        this.lightOffDuration = lightOffDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lightOnDuration")
    public String lightOnDuration;
    public LightSettings withLightOnDuration(String lightOnDuration) {
        this.lightOnDuration = lightOnDuration;
        return this;
    }
}