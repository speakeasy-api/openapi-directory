package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlossaryTermsPair
 * Represents a single entry for an unidirectional glossary.
**/
public class GlossaryTermsPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceTerm")
    public GlossaryTerm sourceTerm;
    public GlossaryTermsPair withSourceTerm(GlossaryTerm sourceTerm) {
        this.sourceTerm = sourceTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetTerm")
    public GlossaryTerm targetTerm;
    public GlossaryTermsPair withTargetTerm(GlossaryTerm targetTerm) {
        this.targetTerm = targetTerm;
        return this;
    }
}