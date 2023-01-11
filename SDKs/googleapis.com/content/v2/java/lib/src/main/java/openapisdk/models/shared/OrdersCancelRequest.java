package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCancelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrdersCancelRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrdersCancelRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonText")
    public String reasonText;
    public OrdersCancelRequest withReasonText(String reasonText) {
        this.reasonText = reasonText;
        return this;
    }
}