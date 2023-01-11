package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VolumeSaleInfoOffers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finskyOfferType")
    public Integer finskyOfferType;
    public VolumeSaleInfoOffers withFinskyOfferType(Integer finskyOfferType) {
        this.finskyOfferType = finskyOfferType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("giftable")
    public Boolean giftable;
    public VolumeSaleInfoOffers withGiftable(Boolean giftable) {
        this.giftable = giftable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public VolumeSaleInfoOffersListPrice listPrice;
    public VolumeSaleInfoOffers withListPrice(VolumeSaleInfoOffersListPrice listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rentalDuration")
    public VolumeSaleInfoOffersRentalDuration rentalDuration;
    public VolumeSaleInfoOffers withRentalDuration(VolumeSaleInfoOffersRentalDuration rentalDuration) {
        this.rentalDuration = rentalDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retailPrice")
    public VolumeSaleInfoOffersRetailPrice retailPrice;
    public VolumeSaleInfoOffers withRetailPrice(VolumeSaleInfoOffersRetailPrice retailPrice) {
        this.retailPrice = retailPrice;
        return this;
    }
}