package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LanguageCodesSet
 * Used with equivalent term set glossaries.
**/
public class LanguageCodesSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCodes")
    public String[] languageCodes;
    public LanguageCodesSet withLanguageCodes(String[] languageCodes) {
        this.languageCodes = languageCodes;
        return this;
    }
}