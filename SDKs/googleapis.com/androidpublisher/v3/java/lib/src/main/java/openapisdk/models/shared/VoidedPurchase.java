package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoidedPurchase
 * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
**/
public class VoidedPurchase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VoidedPurchase withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public VoidedPurchase withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseTimeMillis")
    public String purchaseTimeMillis;
    public VoidedPurchase withPurchaseTimeMillis(String purchaseTimeMillis) {
        this.purchaseTimeMillis = purchaseTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseToken")
    public String purchaseToken;
    public VoidedPurchase withPurchaseToken(String purchaseToken) {
        this.purchaseToken = purchaseToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voidedReason")
    public Integer voidedReason;
    public VoidedPurchase withVoidedReason(Integer voidedReason) {
        this.voidedReason = voidedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voidedSource")
    public Integer voidedSource;
    public VoidedPurchase withVoidedSource(Integer voidedSource) {
        this.voidedSource = voidedSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voidedTimeMillis")
    public String voidedTimeMillis;
    public VoidedPurchase withVoidedTimeMillis(String voidedTimeMillis) {
        this.voidedTimeMillis = voidedTimeMillis;
        return this;
    }
}