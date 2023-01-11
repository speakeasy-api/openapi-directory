package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion[] promotions;
    public GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse withPromotions(GoogleCloudPaymentsResellerSubscriptionV1Promotion[] promotions) {
        this.promotions = promotions;
        return this;
    }
}