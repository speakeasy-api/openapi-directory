package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersRefundResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionStatus")
    public String executionStatus;
    public OrdersRefundResponse withExecutionStatus(String executionStatus) {
        this.executionStatus = executionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OrdersRefundResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}