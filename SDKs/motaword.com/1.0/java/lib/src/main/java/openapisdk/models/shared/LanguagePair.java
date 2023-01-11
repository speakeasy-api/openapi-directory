package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LanguagePair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_language")
    public String sourceLanguage;
    public LanguagePair withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_language")
    public String targetLanguage;
    public LanguagePair withTargetLanguage(String targetLanguage) {
        this.targetLanguage = targetLanguage;
        return this;
    }
}