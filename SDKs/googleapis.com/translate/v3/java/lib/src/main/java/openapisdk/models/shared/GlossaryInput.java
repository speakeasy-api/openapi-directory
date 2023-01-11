package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlossaryInput
 * Represents a glossary built from user provided data.
**/
public class GlossaryInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GlossaryInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GlossaryInputConfig inputConfig;
    public GlossaryInput withInputConfig(GlossaryInputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCodesSet")
    public LanguageCodesSet languageCodesSet;
    public GlossaryInput withLanguageCodesSet(LanguageCodesSet languageCodesSet) {
        this.languageCodesSet = languageCodesSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languagePair")
    public LanguageCodePair languagePair;
    public GlossaryInput withLanguagePair(LanguageCodePair languagePair) {
        this.languagePair = languagePair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GlossaryInput withName(String name) {
        this.name = name;
        return this;
    }
}