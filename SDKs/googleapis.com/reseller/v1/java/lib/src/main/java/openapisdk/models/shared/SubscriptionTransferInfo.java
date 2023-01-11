package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionTransferInfo
 * Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
**/
public class SubscriptionTransferInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentLegacySkuId")
    public String currentLegacySkuId;
    public SubscriptionTransferInfo withCurrentLegacySkuId(String currentLegacySkuId) {
        this.currentLegacySkuId = currentLegacySkuId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumTransferableSeats")
    public Integer minimumTransferableSeats;
    public SubscriptionTransferInfo withMinimumTransferableSeats(Integer minimumTransferableSeats) {
        this.minimumTransferableSeats = minimumTransferableSeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferabilityExpirationTime")
    public String transferabilityExpirationTime;
    public SubscriptionTransferInfo withTransferabilityExpirationTime(String transferabilityExpirationTime) {
        this.transferabilityExpirationTime = transferabilityExpirationTime;
        return this;
    }
}