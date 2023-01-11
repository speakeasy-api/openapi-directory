package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Glossary
 * Represents a glossary built from user provided data.
**/
public class Glossary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Glossary withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryCount")
    public Integer entryCount;
    public Glossary withEntryCount(Integer entryCount) {
        this.entryCount = entryCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GlossaryInputConfig inputConfig;
    public Glossary withInputConfig(GlossaryInputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCodesSet")
    public LanguageCodesSet languageCodesSet;
    public Glossary withLanguageCodesSet(LanguageCodesSet languageCodesSet) {
        this.languageCodesSet = languageCodesSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languagePair")
    public LanguageCodePair languagePair;
    public Glossary withLanguagePair(LanguageCodePair languagePair) {
        this.languagePair = languagePair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Glossary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submitTime")
    public String submitTime;
    public Glossary withSubmitTime(String submitTime) {
        this.submitTime = submitTime;
        return this;
    }
}