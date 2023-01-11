package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPopulationClause
 * A group clause made up of list population terms representing constraints joined by ORs.
**/
public class ListPopulationClause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public ListPopulationTerm[] terms;
    public ListPopulationClause withTerms(ListPopulationTerm[] terms) {
        this.terms = terms;
        return this;
    }
}