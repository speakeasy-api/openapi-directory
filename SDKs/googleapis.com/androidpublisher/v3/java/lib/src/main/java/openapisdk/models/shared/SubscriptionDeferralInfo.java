package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionDeferralInfo
 * A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
**/
public class SubscriptionDeferralInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredExpiryTimeMillis")
    public String desiredExpiryTimeMillis;
    public SubscriptionDeferralInfo withDesiredExpiryTimeMillis(String desiredExpiryTimeMillis) {
        this.desiredExpiryTimeMillis = desiredExpiryTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedExpiryTimeMillis")
    public String expectedExpiryTimeMillis;
    public SubscriptionDeferralInfo withExpectedExpiryTimeMillis(String expectedExpiryTimeMillis) {
        this.expectedExpiryTimeMillis = expectedExpiryTimeMillis;
        return this;
    }
}