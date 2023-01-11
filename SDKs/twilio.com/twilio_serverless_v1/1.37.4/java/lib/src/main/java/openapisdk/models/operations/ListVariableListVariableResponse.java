package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVariableListVariableResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListVariableListVariableResponseMeta meta;
    public ListVariableListVariableResponse withMeta(ListVariableListVariableResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variables")
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable[] variables;
    public ListVariableListVariableResponse withVariables(openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable[] variables) {
        this.variables = variables;
        return this;
    }
}