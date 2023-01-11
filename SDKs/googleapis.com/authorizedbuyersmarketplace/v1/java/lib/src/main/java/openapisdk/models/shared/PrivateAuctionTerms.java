package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateAuctionTerms
 * Pricing terms for Private Auctions.
**/
public class PrivateAuctionTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floorPrice")
    public Price floorPrice;
    public PrivateAuctionTerms withFloorPrice(Price floorPrice) {
        this.floorPrice = floorPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openAuctionAllowed")
    public Boolean openAuctionAllowed;
    public PrivateAuctionTerms withOpenAuctionAllowed(Boolean openAuctionAllowed) {
        this.openAuctionAllowed = openAuctionAllowed;
        return this;
    }
}