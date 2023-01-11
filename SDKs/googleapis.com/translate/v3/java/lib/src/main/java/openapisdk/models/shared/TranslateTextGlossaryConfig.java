package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranslateTextGlossaryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossary")
    public String glossary;
    public TranslateTextGlossaryConfig withGlossary(String glossary) {
        this.glossary = glossary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreCase")
    public Boolean ignoreCase;
    public TranslateTextGlossaryConfig withIgnoreCase(Boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
        return this;
    }
}