package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostQuery200ApplicationJsonExplanationNode
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
public class PostQuery200ApplicationJsonExplanationNode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Double index;
    public PostQuery200ApplicationJsonExplanationNode withIndex(Double index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public PostQuery200ApplicationJsonExplanationNodeTerms[] terms;
    public PostQuery200ApplicationJsonExplanationNode withTerms(PostQuery200ApplicationJsonExplanationNodeTerms[] terms) {
        this.terms = terms;
        return this;
    }
}