package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload
 * Payload specific to Youtube products.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerEligibilityIds")
    public String[] partnerEligibilityIds;
    public GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload withPartnerEligibilityIds(String[] partnerEligibilityIds) {
        this.partnerEligibilityIds = partnerEligibilityIds;
        return this;
    }
}