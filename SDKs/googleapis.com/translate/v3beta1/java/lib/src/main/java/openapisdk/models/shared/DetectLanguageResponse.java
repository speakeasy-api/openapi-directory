package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectLanguageResponse
 * The response message for language detection.
**/
public class DetectLanguageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public DetectedLanguage[] languages;
    public DetectLanguageResponse withLanguages(DetectedLanguage[] languages) {
        this.languages = languages;
        return this;
    }
}