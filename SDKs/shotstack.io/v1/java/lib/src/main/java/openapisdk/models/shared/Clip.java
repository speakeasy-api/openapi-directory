package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Clip
 * A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it.
**/
public class Clip {
    @JsonProperty("asset")
    public Object asset;
    public Clip withAsset(Object asset) {
        this.asset = asset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effect")
    public ClipEffectEnum effect;
    public Clip withEffect(ClipEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public ClipFilterEnum filter;
    public Clip withFilter(ClipFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fit")
    public ClipFitEnum fit;
    public Clip withFit(ClipFitEnum fit) {
        this.fit = fit;
        return this;
    }
    @JsonProperty("length")
    public Double length;
    public Clip withLength(Double length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Offset offset;
    public Clip withOffset(Offset offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opacity")
    public Double opacity;
    public Clip withOpacity(Double opacity) {
        this.opacity = opacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public ClipPositionEnum position;
    public Clip withPosition(ClipPositionEnum position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scale")
    public Double scale;
    public Clip withScale(Double scale) {
        this.scale = scale;
        return this;
    }
    @JsonProperty("start")
    public Double start;
    public Clip withStart(Double start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transition")
    public Transition transition;
    public Clip withTransition(Transition transition) {
        this.transition = transition;
        return this;
    }
}