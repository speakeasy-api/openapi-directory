package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Overlay
 * Overlay configuration.
**/
public class Overlay {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("animations")
    public Animation[] animations;
    public Overlay withAnimations(Animation[] animations) {
        this.animations = animations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public Overlay withImage(Image image) {
        this.image = image;
        return this;
    }
}