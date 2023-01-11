package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LanguageCodePair
 * Used with unidirectional glossaries.
**/
public class LanguageCodePair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceLanguageCode")
    public String sourceLanguageCode;
    public LanguageCodePair withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLanguageCode")
    public String targetLanguageCode;
    public LanguageCodePair withTargetLanguageCode(String targetLanguageCode) {
        this.targetLanguageCode = targetLanguageCode;
        return this;
    }
}