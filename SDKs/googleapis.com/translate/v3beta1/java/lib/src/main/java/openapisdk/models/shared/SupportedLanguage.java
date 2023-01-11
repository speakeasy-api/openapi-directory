package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SupportedLanguage
 * A single supported language response corresponds to information related to one supported language.
**/
public class SupportedLanguage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SupportedLanguage withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public SupportedLanguage withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportSource")
    public Boolean supportSource;
    public SupportedLanguage withSupportSource(Boolean supportSource) {
        this.supportSource = supportSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportTarget")
    public Boolean supportTarget;
    public SupportedLanguage withSupportTarget(Boolean supportTarget) {
        this.supportTarget = supportTarget;
        return this;
    }
}