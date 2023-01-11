package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1WebDetectionWebLabel
 * Label to provide extra metadata for the web detection.
**/
public class GoogleCloudVisionV1p2beta1WebDetectionWebLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public GoogleCloudVisionV1p2beta1WebDetectionWebLabel withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudVisionV1p2beta1WebDetectionWebLabel withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}