package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangePlanRequest
 * JSON template for the ChangePlan rpc request.
**/
public class ChangePlanRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealCode")
    public String dealCode;
    public ChangePlanRequest withDealCode(String dealCode) {
        this.dealCode = dealCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChangePlanRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planName")
    public String planName;
    public ChangePlanRequest withPlanName(String planName) {
        this.planName = planName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderId")
    public String purchaseOrderId;
    public ChangePlanRequest withPurchaseOrderId(String purchaseOrderId) {
        this.purchaseOrderId = purchaseOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seats")
    public Seats seats;
    public ChangePlanRequest withSeats(Seats seats) {
        this.seats = seats;
        return this;
    }
}