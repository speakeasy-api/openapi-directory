package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1TextAnnotationTextProperty
 * Additional information detected on the structural component.
**/
public class GoogleCloudVisionV1p2beta1TextAnnotationTextProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedBreak")
    public GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak detectedBreak;
    public GoogleCloudVisionV1p2beta1TextAnnotationTextProperty withDetectedBreak(GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak detectedBreak) {
        this.detectedBreak = detectedBreak;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedLanguages")
    public GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage[] detectedLanguages;
    public GoogleCloudVisionV1p2beta1TextAnnotationTextProperty withDetectedLanguages(GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage[] detectedLanguages) {
        this.detectedLanguages = detectedLanguages;
        return this;
    }
}