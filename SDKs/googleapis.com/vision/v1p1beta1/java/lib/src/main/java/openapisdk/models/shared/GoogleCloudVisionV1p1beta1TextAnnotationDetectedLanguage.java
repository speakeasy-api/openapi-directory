package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage
 * Detected language for a structural component.
**/
public class GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}