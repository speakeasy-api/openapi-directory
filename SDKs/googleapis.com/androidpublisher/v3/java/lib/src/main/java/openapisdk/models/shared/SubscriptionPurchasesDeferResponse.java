package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionPurchasesDeferResponse
 * Response for the purchases.subscriptions.defer API.
**/
public class SubscriptionPurchasesDeferResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newExpiryTimeMillis")
    public String newExpiryTimeMillis;
    public SubscriptionPurchasesDeferResponse withNewExpiryTimeMillis(String newExpiryTimeMillis) {
        this.newExpiryTimeMillis = newExpiryTimeMillis;
        return this;
    }
}