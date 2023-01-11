package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LanguagePredicted {
    @JsonProperty("detected_language")
    public String detectedLanguage;
    public LanguagePredicted withDetectedLanguage(String detectedLanguage) {
        this.detectedLanguage = detectedLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LanguagePredicted withId(String id) {
        this.id = id;
        return this;
    }
}