package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFunctionListFunctionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functions")
    public openapisdk.models.shared.ServerlessV1ServiceFunction[] functions;
    public ListFunctionListFunctionResponse withFunctions(openapisdk.models.shared.ServerlessV1ServiceFunction[] functions) {
        this.functions = functions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFunctionListFunctionResponseMeta meta;
    public ListFunctionListFunctionResponse withMeta(ListFunctionListFunctionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}