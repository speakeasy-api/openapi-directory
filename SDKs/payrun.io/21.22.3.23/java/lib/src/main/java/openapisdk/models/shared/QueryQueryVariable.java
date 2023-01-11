package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryQueryVariable
 * The querys' variables
**/
public class QueryQueryVariable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variable")
    public Object[] variable;
    public QueryQueryVariable withVariable(Object[] variable) {
        this.variable = variable;
        return this;
    }
}