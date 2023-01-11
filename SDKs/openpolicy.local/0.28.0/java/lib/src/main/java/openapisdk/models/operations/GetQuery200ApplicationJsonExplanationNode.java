package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetQuery200ApplicationJsonExplanationNode
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
public class GetQuery200ApplicationJsonExplanationNode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Double index;
    public GetQuery200ApplicationJsonExplanationNode withIndex(Double index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public GetQuery200ApplicationJsonExplanationNodeTerms[] terms;
    public GetQuery200ApplicationJsonExplanationNode withTerms(GetQuery200ApplicationJsonExplanationNodeTerms[] terms) {
        this.terms = terms;
        return this;
    }
}