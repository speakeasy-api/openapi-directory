package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LanguageSpoken
 * Language spoken by at least one staff member.
**/
public class LanguageSpoken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public LanguageSpoken withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spoken")
    public Boolean spoken;
    public LanguageSpoken withSpoken(Boolean spoken) {
        this.spoken = spoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spokenException")
    public LanguageSpokenSpokenExceptionEnum spokenException;
    public LanguageSpoken withSpokenException(LanguageSpokenSpokenExceptionEnum spokenException) {
        this.spokenException = spokenException;
        return this;
    }
}