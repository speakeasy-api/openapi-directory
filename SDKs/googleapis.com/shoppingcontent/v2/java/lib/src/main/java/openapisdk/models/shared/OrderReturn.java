package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderReturn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public String actor;
    public OrderReturn withActor(String actor) {
        this.actor = actor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public OrderReturn withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public OrderReturn withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrderReturn withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonText")
    public String reasonText;
    public OrderReturn withReasonText(String reasonText) {
        this.reasonText = reasonText;
        return this;
    }
}