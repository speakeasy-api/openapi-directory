package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DealTermsNonGuaranteedAuctionTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoOptimizePrivateAuction")
    public Boolean autoOptimizePrivateAuction;
    public DealTermsNonGuaranteedAuctionTerms withAutoOptimizePrivateAuction(Boolean autoOptimizePrivateAuction) {
        this.autoOptimizePrivateAuction = autoOptimizePrivateAuction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservePricePerBuyers")
    public PricePerBuyer[] reservePricePerBuyers;
    public DealTermsNonGuaranteedAuctionTerms withReservePricePerBuyers(PricePerBuyer[] reservePricePerBuyers) {
        this.reservePricePerBuyers = reservePricePerBuyers;
        return this;
    }
}