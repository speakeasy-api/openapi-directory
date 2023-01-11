package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSubscriptionOffersResponse
 * Response message for ListSubscriptionOffers.
**/
public class ListSubscriptionOffersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSubscriptionOffersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOffers")
    public SubscriptionOffer[] subscriptionOffers;
    public ListSubscriptionOffersResponse withSubscriptionOffers(SubscriptionOffer[] subscriptionOffers) {
        this.subscriptionOffers = subscriptionOffers;
        return this;
    }
}