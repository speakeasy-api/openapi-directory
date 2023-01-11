package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExecutionListExecutionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executions")
    public openapisdk.models.shared.StudioV1FlowExecution[] executions;
    public ListExecutionListExecutionResponse withExecutions(openapisdk.models.shared.StudioV1FlowExecution[] executions) {
        this.executions = executions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListExecutionListExecutionResponseMeta meta;
    public ListExecutionListExecutionResponse withMeta(ListExecutionListExecutionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}