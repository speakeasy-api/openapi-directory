package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LivingArea
 * An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
**/
public class LivingArea {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessibility")
    public LivingAreaAccessibility accessibility;
    public LivingArea withAccessibility(LivingAreaAccessibility accessibility) {
        this.accessibility = accessibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eating")
    public LivingAreaEating eating;
    public LivingArea withEating(LivingAreaEating eating) {
        this.eating = eating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public LivingAreaFeatures features;
    public LivingArea withFeatures(LivingAreaFeatures features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public LivingAreaLayout layout;
    public LivingArea withLayout(LivingAreaLayout layout) {
        this.layout = layout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sleeping")
    public LivingAreaSleeping sleeping;
    public LivingArea withSleeping(LivingAreaSleeping sleeping) {
        this.sleeping = sleeping;
        return this;
    }
}