package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeSaleInfo
 * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
**/
public class VolumeSaleInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyLink")
    public String buyLink;
    public VolumeSaleInfo withBuyLink(String buyLink) {
        this.buyLink = buyLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public VolumeSaleInfo withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEbook")
    public Boolean isEbook;
    public VolumeSaleInfo withIsEbook(Boolean isEbook) {
        this.isEbook = isEbook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public VolumeSaleInfoListPrice listPrice;
    public VolumeSaleInfo withListPrice(VolumeSaleInfoListPrice listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offers")
    public VolumeSaleInfoOffers[] offers;
    public VolumeSaleInfo withOffers(VolumeSaleInfoOffers[] offers) {
        this.offers = offers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onSaleDate")
    public String onSaleDate;
    public VolumeSaleInfo withOnSaleDate(String onSaleDate) {
        this.onSaleDate = onSaleDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retailPrice")
    public VolumeSaleInfoRetailPrice retailPrice;
    public VolumeSaleInfo withRetailPrice(VolumeSaleInfoRetailPrice retailPrice) {
        this.retailPrice = retailPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saleability")
    public String saleability;
    public VolumeSaleInfo withSaleability(String saleability) {
        this.saleability = saleability;
        return this;
    }
}