package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeSaleInfoOffersListPrice
 * Offer list (=undiscounted) price in Micros.
**/
public class VolumeSaleInfoOffersListPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountInMicros")
    public Double amountInMicros;
    public VolumeSaleInfoOffersListPrice withAmountInMicros(Double amountInMicros) {
        this.amountInMicros = amountInMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public VolumeSaleInfoOffersListPrice withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
}