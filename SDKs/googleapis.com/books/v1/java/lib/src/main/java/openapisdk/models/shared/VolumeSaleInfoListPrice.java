package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeSaleInfoListPrice
 * Suggested retail price. (In LITE projection.)
**/
public class VolumeSaleInfoListPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public VolumeSaleInfoListPrice withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public VolumeSaleInfoListPrice withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
}