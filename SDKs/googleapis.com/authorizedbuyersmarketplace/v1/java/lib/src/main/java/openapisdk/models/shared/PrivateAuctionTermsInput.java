package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateAuctionTermsInput
 * Pricing terms for Private Auctions.
**/
public class PrivateAuctionTermsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floorPrice")
    public Price floorPrice;
    public PrivateAuctionTermsInput withFloorPrice(Price floorPrice) {
        this.floorPrice = floorPrice;
        return this;
    }
}