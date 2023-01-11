package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PresentationParams
 * Hints for displaying the asset, based on information available when the asset was uploaded.
**/
public class PresentationParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public String backgroundColor;
    public PresentationParams withBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorSpace")
    public PresentationParamsColorSpaceEnum colorSpace;
    public PresentationParams withColorSpace(PresentationParamsColorSpaceEnum colorSpace) {
        this.colorSpace = colorSpace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientingRotation")
    public Quaternion orientingRotation;
    public PresentationParams withOrientingRotation(Quaternion orientingRotation) {
        this.orientingRotation = orientingRotation;
        return this;
    }
}