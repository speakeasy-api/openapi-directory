package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlossaryTermsSet
 * Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.
**/
public class GlossaryTermsSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public GlossaryTerm[] terms;
    public GlossaryTermsSet withTerms(GlossaryTerm[] terms) {
        this.terms = terms;
        return this;
    }
}