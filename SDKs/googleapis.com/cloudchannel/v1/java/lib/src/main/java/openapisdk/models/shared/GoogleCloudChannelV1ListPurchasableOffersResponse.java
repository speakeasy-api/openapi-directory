package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListPurchasableOffersResponse
 * Response message for ListPurchasableOffers.
**/
public class GoogleCloudChannelV1ListPurchasableOffersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListPurchasableOffersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchasableOffers")
    public GoogleCloudChannelV1PurchasableOffer[] purchasableOffers;
    public GoogleCloudChannelV1ListPurchasableOffersResponse withPurchasableOffers(GoogleCloudChannelV1PurchasableOffer[] purchasableOffers) {
        this.purchasableOffers = purchasableOffers;
        return this;
    }
}