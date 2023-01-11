package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscriptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coupon_ids")
    public String[] couponIds;
    public SubscriptionInput withCouponIds(String[] couponIds) {
        this.couponIds = couponIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_ids")
    public String[] targetIds;
    public SubscriptionInput withTargetIds(String[] targetIds) {
        this.targetIds = targetIds;
        return this;
    }
}