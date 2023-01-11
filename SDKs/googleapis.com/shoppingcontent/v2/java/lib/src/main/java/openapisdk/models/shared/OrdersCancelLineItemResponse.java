package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCancelLineItemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionStatus")
    public String executionStatus;
    public OrdersCancelLineItemResponse withExecutionStatus(String executionStatus) {
        this.executionStatus = executionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OrdersCancelLineItemResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}