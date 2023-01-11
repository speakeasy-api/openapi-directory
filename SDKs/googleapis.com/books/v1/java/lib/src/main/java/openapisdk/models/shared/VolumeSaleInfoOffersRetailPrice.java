package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeSaleInfoOffersRetailPrice
 * Offer retail (=discounted) price in Micros
**/
public class VolumeSaleInfoOffersRetailPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountInMicros")
    public Double amountInMicros;
    public VolumeSaleInfoOffersRetailPrice withAmountInMicros(Double amountInMicros) {
        this.amountInMicros = amountInMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public VolumeSaleInfoOffersRetailPrice withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
}