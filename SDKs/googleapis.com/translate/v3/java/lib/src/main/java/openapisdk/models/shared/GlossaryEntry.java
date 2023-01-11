package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlossaryEntry
 * Represents a single entry in a glossary.
**/
public class GlossaryEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GlossaryEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GlossaryEntry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsPair")
    public GlossaryTermsPair termsPair;
    public GlossaryEntry withTermsPair(GlossaryTermsPair termsPair) {
        this.termsPair = termsPair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsSet")
    public GlossaryTermsSet termsSet;
    public GlossaryEntry withTermsSet(GlossaryTermsSet termsSet) {
        this.termsSet = termsSet;
        return this;
    }
}