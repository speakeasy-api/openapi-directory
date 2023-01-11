package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GamePlatformsRequirements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum")
    public String minimum;
    public GamePlatformsRequirements withMinimum(String minimum) {
        this.minimum = minimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommended")
    public String recommended;
    public GamePlatformsRequirements withRecommended(String recommended) {
        this.recommended = recommended;
        return this;
    }
}