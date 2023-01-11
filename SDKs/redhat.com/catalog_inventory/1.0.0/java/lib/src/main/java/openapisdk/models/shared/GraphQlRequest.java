package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GraphQlRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationName")
    public String operationName;
    public GraphQlRequest withOperationName(String operationName) {
        this.operationName = operationName;
        return this;
    }
    @JsonProperty("query")
    public String query;
    public GraphQlRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variables")
    public java.util.Map<String, Object> variables;
    public GraphQlRequest withVariables(java.util.Map<String, Object> variables) {
        this.variables = variables;
        return this;
    }
}