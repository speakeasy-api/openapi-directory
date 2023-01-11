package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Animation
 * Animation types.
**/
public class Animation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("animationEnd")
    public AnimationEnd animationEnd;
    public Animation withAnimationEnd(AnimationEnd animationEnd) {
        this.animationEnd = animationEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("animationFade")
    public AnimationFade animationFade;
    public Animation withAnimationFade(AnimationFade animationFade) {
        this.animationFade = animationFade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("animationStatic")
    public AnimationStatic animationStatic;
    public Animation withAnimationStatic(AnimationStatic animationStatic) {
        this.animationStatic = animationStatic;
        return this;
    }
}