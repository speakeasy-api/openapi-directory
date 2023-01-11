package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rule
 * A Rule defines a name, and a boolean expression in [conjunctive normal form] (http://mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be applied to a path event to determine if that name should be applied.
**/
public class Rule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disjunctiveMatchStatements")
    public DisjunctiveMatchStatement[] disjunctiveMatchStatements;
    public Rule withDisjunctiveMatchStatements(DisjunctiveMatchStatement[] disjunctiveMatchStatements) {
        this.disjunctiveMatchStatements = disjunctiveMatchStatements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Rule withName(String name) {
        this.name = name;
        return this;
    }
}