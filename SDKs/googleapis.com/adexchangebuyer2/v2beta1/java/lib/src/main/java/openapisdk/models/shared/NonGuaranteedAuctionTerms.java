package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NonGuaranteedAuctionTerms
 * Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.
**/
public class NonGuaranteedAuctionTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoOptimizePrivateAuction")
    public Boolean autoOptimizePrivateAuction;
    public NonGuaranteedAuctionTerms withAutoOptimizePrivateAuction(Boolean autoOptimizePrivateAuction) {
        this.autoOptimizePrivateAuction = autoOptimizePrivateAuction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservePricesPerBuyer")
    public PricePerBuyer[] reservePricesPerBuyer;
    public NonGuaranteedAuctionTerms withReservePricesPerBuyer(PricePerBuyer[] reservePricesPerBuyer) {
        this.reservePricesPerBuyer = reservePricesPerBuyer;
        return this;
    }
}