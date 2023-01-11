package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1PurchasableOffer
 * Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.
**/
public class GoogleCloudChannelV1PurchasableOffer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offer")
    public GoogleCloudChannelV1Offer offer;
    public GoogleCloudChannelV1PurchasableOffer withOffer(GoogleCloudChannelV1Offer offer) {
        this.offer = offer;
        return this;
    }
}