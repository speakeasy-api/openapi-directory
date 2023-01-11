package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OfferDetails
 * Offer details information related to a purchase line item.
**/
public class OfferDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basePlanId")
    public String basePlanId;
    public OfferDetails withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;
    public OfferDetails withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerTags")
    public String[] offerTags;
    public OfferDetails withOfferTags(String[] offerTags) {
        this.offerTags = offerTags;
        return this;
    }
}