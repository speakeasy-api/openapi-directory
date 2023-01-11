package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse
 * Response containing the found promotions for the current user.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion[] promotions;
    public GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse withPromotions(GoogleCloudPaymentsResellerSubscriptionV1Promotion[] promotions) {
        this.promotions = promotions;
        return this;
    }
}