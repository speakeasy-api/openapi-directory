package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RefundReason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RefundReason withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public RefundReason withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
}